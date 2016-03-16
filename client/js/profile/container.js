import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import * as actions from './actions'
import * as components from './components'
import { Button } from '../shared/components'
import { getAll } from './selectors'

export class Container extends React.Component {

  constructor(props) {
    super(props)
    this.firedux = props.route.firedux
  }

  render() {

    const { profile, testProfile } = this.props;
    const firedux = this.firedux;

    console.log(firedux.get('events'));

    return (
      <div>
        Profile: {profile.name}
        <components.image url={profile.imageUrl} />
        <Button onclick={() => testProfile()}>Test</Button>
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
