import React from 'react';
import styles from '../../../css/components/button.css';

const Component = ({ children, onclick }, context) => {

  return (
    <button className={styles.base} onClick={() => onclick()}>
      {children}
    </button>
  );

};

export default Component;
