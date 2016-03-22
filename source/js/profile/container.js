import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import * as actions from './actions'
import * as components from './components'
import { Button } from '../shared/components'
import { getAll } from './selectors'

import * as Firebase from '../shared/services/firebase';

export class Container extends React.Component {

  componentWillMount() {

    const { receiveRef } = this.props;

    // TODO - this should take id from props/route `/users/:id`
    Firebase.create('/users/0', receiveRef);

  }

  componentWillUnmount() {

    const { removeRef } = this.props;

    removeRef();

  }

  render() {

    const { profile, setProfile } = this.props;

    return (
      <div>
        Profile: {profile.name}
        <components.avatar url={profile.avatar} />
        <input ref='profile_name' type='text' />
        <Button onclick={() => setProfile({name: this.refs.profile_name.value})}>Set</Button>
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    profile: getAll
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Container)
