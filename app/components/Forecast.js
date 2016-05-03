import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Loading from './Loading'
import { getDate, convertTemp } from '../utils/utils'
import DayItem from './DayItem'

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		maxWidth: 1200,
		margin: '50px auto'
	},
	dayContainer: {
		display:'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 35
	},
	header: {
		fontSize: 65,
		color: '#333',
		fontWeight: 100,
		textAlign: 'center'
	},
	subheader: {
		fontSize: 30,
		color: '#333',
		fontWeight:100
	},
	weather: {
		height: 130
	}
}




function ForecastUI (props) {
	console.log(props.forecast)
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.forecast.list.map(function (listItem) {
          return <DayItem key = {listItem.dt} day={listItem} handleClick = {props.handleClick.bind(null,listItem)}/>
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
	console.log(props.weatherInfo)
  return (
    <div>
      {
        props.isLoading === true
          ? <Loading />
          : <ForecastUI 
          	city={props.city} 
          	forecast={props.weatherInfo} 
          	handleClick = {props.onHandleClick} />
      }
    </div>
  )
}



Forecast.PropTypes = {
	city: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	weatherInfo: PropTypes.array.isRequired,
	onHandleClick: PropTypes.func.isRequired
}

export default Forecast