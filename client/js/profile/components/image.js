import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../../../css/components/profile/image.css';

const cx = classNames.bind(styles);

const Component = ({ url }, context) => {

  let className = cx({
    base: true
  });

  let style = {
    backgroundImage: `url(${url})`
  };

  return (
    <div className={className} style={style}></div>
  );

};

Component.propTypes = {
  url: PropTypes.string.isRequired
};

export default Component;
