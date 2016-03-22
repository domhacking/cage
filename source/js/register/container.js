import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router';

import * as actions from './actions'
import { getAll, getErrorCode, isRegistered } from './selectors'
import { Header, Error } from '../shared/components'
import RaisedButton from 'material/raised-button';

export class Container extends React.Component {

  render() {

    const { createUser, errorCode, registered } = this.props;
    const error = errorCode ? <Error code={errorCode} /> : null;

    return (
      <div>
        <Header text={'Register'} />
        {(() => {
          if (registered) {
            return (
              <div>
                <p>You're in!</p>
                <Link to={'/login'}>Login now</Link>
              </div>
            );
          } else {
            return (
              <div>
                <input ref='user_email' type='text' />
                <input ref='user_password' type='password' />
                <RaisedButton label={'Register'} onClick={() => createUser({email: this.refs.user_email.value, password: this.refs.user_password.value})} />
              </div>
            );
          }
        })()}
        {error}
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    register: getAll,
    errorCode: getErrorCode,
    registered: isRegistered
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Container)
