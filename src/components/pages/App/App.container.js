import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchWeather } from '../../../actions/weather'
import AppTemplate from '../../templates/App'

class App extends Component {
  async componentDidMount () {
    const { fetchWeather } = this.props

    await Promise.all([
      fetchWeather('nuuk,gl'),
      fetchWeather('urubici,br'),
      fetchWeather('nairobi,ke')
    ])
  }

  render () {
    return (
      <AppTemplate {...this.props} />
    )
  }
}

const mapStateToProps = ({ weather }) => ({ weather })

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchWeather
}, dispatch)

App.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
  weather: PropTypes.shape({
    cities: PropTypes.shape({}).isRequired,
    error: PropTypes.string
  }).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
