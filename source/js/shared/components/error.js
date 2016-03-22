import React from 'react';
import styles from '../../../css/components/error.css';
import { ERROR_MESSAGES } from '../constants';

const Component = (props) => {

  const { code } = props;
  const message = ERROR_MESSAGES[code];

  return (
    <div className={styles.base}>
      <p>{message}</p>
    </div>
  );

}

export default Component;
