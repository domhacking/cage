import React, { Component } from 'react';
import { Header, Nav } from '../components';

export default class App extends Component {

  render() {

    return (
      <div>

        <Header text={'cage'} />

        <Nav routes={['login', 'register', 'profile']} />

        {/* render containers dynamically based on route */}
        {this.props.children}

      </div>
    );

  }

}
