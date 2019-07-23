import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/Styles.module.css';

const Controls = ({ click, page, length }) => (
  <section className={styles.controls}>
    {page === 0 ? (
      <button className={styles.button} type="button" onClick={click} disabled>
        Prev
      </button>
    ) : (
      <button className={styles.button} type="button" onClick={click}>
        Prev
      </button>
    )}

    {page === length - 1 ? (
      <button className={styles.button} type="button" onClick={click} disabled>
        Next
      </button>
    ) : (
      <button className={styles.button} type="button" onClick={click}>
        Next
      </button>
    )}
  </section>
);

Controls.propTypes = {
  click: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Controls;
