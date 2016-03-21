import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import * as actions from './actions'
import * as components from './components'
import { Button } from '../shared/components'
import { getAll } from './selectors'
import * as firebase from '../firebase'

export class Container extends React.Component {

  render() {

    const { profile, profileActions, firebaseActions } = this.props;
    const { testProfile } = profileActions;
    const { get: getFirebase } = firebaseActions;

    return (
      <div>
        Profile: {profile.name}
        <components.image url={profile.imageUrl} />
        <Button onclick={() => testProfile()}>Test</Button>
        <Button onclick={() => getFirebase('groups')}>Get</Button>
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
      firebaseActions: bindActionCreators(firebase.actions, dispatch)
    }
  }
)(Container)
