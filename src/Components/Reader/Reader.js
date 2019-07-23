import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from '../Styles/Styles.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    page: 0,
    len: this.props.items.length,
  };

  handelSwitchPage = e => {
    if (e.target.textContent === 'Next') {
      this.setState(prevState => ({ page: prevState.page + 1 }));
    } else if (e.target.textContent === 'Prev') {
      this.setState(prevState => ({ page: prevState.page - 1 }));
    }
    // console.log(this.state.page);
  };

  render() {
    const { items } = this.props;
    const { page, len } = this.state;
    // console.log({ items });
    // console.log({ len });
    return (
      <div className={styles.reader}>
        <Publication item={items[page]} />
        <Counter page={page} length={len} />
        <Controls click={this.handelSwitchPage} page={page} length={len} />
      </div>
    );
  }
}
