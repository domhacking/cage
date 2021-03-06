import React from 'react';
import styles from '../../../css/components/header.css';

const Component = (props) => {

  const { text } = props;

  return (
    <div className={styles.base}>
      <h1>{text}</h1>
    </div>
  );

}

export default Component;
