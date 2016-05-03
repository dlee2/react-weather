import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from '../styles'



function Button (props) {
	return(
		<button type = "button"
		className = "btn btn-md btn-success"
		style = {styles.spacing}
		onClick = {props.onSubmitCity}>
			{props.children}
		</button>
	)

}

function InputField (props) {
	return(
		<input type = "text"
		 placeholder = "Albany, Ny"
		 value = {props.city}
		 onChange = {props.onUpdateCity}/>
	)
}

function GetStyles(props) {
	return {
		display: 'flex',
		flexDirection: props.direction || 'column',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: 300,
		alignSelf: 'right'
	}
}

function GetCity (props) {
	return (
			<div style = {GetStyles(props)}>
					<InputField city = {props.city} onUpdateCity = {props.onUpdateCity}/>
					<Button onSubmitCity = {props.onSubmitCity}>Get Weather</Button>
			</div>	
	)
 }


GetCity.PropTypes = {
	direction: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	onSubmitCity: PropTypes.func.isRequired,
	onUpdateCity: PropTypes.func.isRequired
}

export default GetCity