import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import * as actions from './actions'
import { Header } from '../shared/components'
import { getAll } from './selectors'

export class Container extends React.Component {

  render() {

    return (
      <div>
        Login
        <Header text={'hello'} />
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    login: getAll
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Container)
