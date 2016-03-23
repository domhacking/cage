import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import * as actions from './actions'
import * as components from './components'
import RaisedButton from 'material/raised-button';
import { getAll } from './selectors'
import * as loginActions from '../login/actions';

import * as Firebase from '../shared/services/firebase';

export class Container extends React.Component {

  componentWillMount() {

    const { receiveRef } = this.props.profileActions;

    // TODO - this should take id from props/route `/users/:id` https://github.com/reactjs/react-router-tutorial/blob/start/lessons/06-params.md
    Firebase.create('/users/0', receiveRef);

  }

  componentWillUnmount() {

    const { removeRef } = this.props.profileActions;

    removeRef();

  }

  render() {

    const { profile, profileActions, userActions } = this.props;
    const { setProfile } = profileActions;
    const { logoutUser } = userActions;

    return (
      <div>
        Profile: {profile.name}
        <components.avatar url={profile.avatar} />
        <input ref='profile_name' type='text' />
        <RaisedButton label={'Set'} onClick={() => setProfile({name: this.refs.profile_name.value})} />
        <RaisedButton label={'Logout'} onClick={() => logoutUser()} />
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    profile: getAll
  }),
  dispatch => {
    return {
      profileActions: bindActionCreators(actions, dispatch),
      userActions: bindActionCreators(loginActions, dispatch)
    }
  }
)(Container)
