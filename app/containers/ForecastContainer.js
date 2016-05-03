import React, { PropTypes, Component } from 'react'
import Forecast from '../components/Forecast'
import { getCurrentWeather, getForecast } from '../utils/WeatherHelper'

class ForecastContainer extends Component {
  constructor () {
  	super()
    this.state = {
      isLoading: true,
      weatherInfo: []
    }
  }
  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  }
  componentWillReceiveProps (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  }
  makeRequest (city) {
    getForecast(city)
      .then((weatherInfo) => {
        this.setState({
          isLoading: false,
          weatherInfo: weatherInfo
        });
      });
  }
  handleClick (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  }
  render () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        onHandleClick={(weather) => this.handleClick(weather)}
        weatherInfo={this.state.weatherInfo} />
    )
  }
}

ForecastContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ForecastContainer