import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/Styles.module.css';

const Publication = ({ item }) => (
  <article className={styles.publication} key={item.id}>
    <h2 className={styles.publicationH2}>{item.title}</h2>
    <p className={styles.publicationP}>{item.text}</p>
  </article>
);

Publication.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Publication;
