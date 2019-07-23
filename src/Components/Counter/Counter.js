import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/Styles.module.css';

const Counter = ({ page, length }) => (
  <p className={styles.counter}>
    {page + 1}/{length}
  </p>
);

Counter.propTypes = {
  page: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Counter;
