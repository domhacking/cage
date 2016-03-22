import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../../../css/components/nav.css';

const Component = ({routes}) => {

  return (
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      {routes.map( (route, i) => (
        <li key={i}><Link to={`/${route}`}>{route}</Link></li>
      ))}
    </ul>
  );

};

Component.propTypes = {
  routes: PropTypes.array.isRequired
};

export default Component;
