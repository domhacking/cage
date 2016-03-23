import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import * as actions from './actions'
import { getAll, getErrorCode, isAuthorised } from './selectors'
import { Header, Error } from '../shared/components'
import RaisedButton from 'material/raised-button';

export class Container extends React.Component {

  render() {

    const { loginUser, errorCode, authorised } = this.props;
    const error = errorCode ? <Error code={errorCode} /> : null;

    return (
      <div>
        <Header text={'Login'} />
        {(() => {
          if (authorised) {
            return (
              <div>
                You're already logged in - this should probably not be allowed.
              </div>
            )
          } else {
            return (
              <div>
                <input ref='user_email' type='text' />
                <input ref='user_password' type='password' />
                <RaisedButton label={'Login'} onClick={() => loginUser({email: this.refs.user_email.value, password: this.refs.user_password.value})} />
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
    login: getAll,
    errorCode: getErrorCode,
    authorised: isAuthorised
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Container)
