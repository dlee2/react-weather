import React, { PropTypes, Component } from 'react'
import GetCity from '../components/GetCity'



class GetCityContainer extends Component {
	constructor () {
		super()
		this.state =  {
			city: ""
		}
	}

	handleUpdateCity (e) {
		this.setState({
			city: e.target.value
		})
	}

	handleSubmitCity (e){
		e.preventDefault();
		console.log(typeof this.state.city);
		this.context.router.push('/forecast/' + this.state.city);

	}
	render () {
		return (

			<GetCity 
			direction = {this.props.direction}
			onUpdateCity = {(e) => this.handleUpdateCity(e)}
			onSubmitCity = {(e) => this.handleSubmitCity(e)}
			city = {this.state.city} />
		)
	}
 }



 GetCityContainer.PropTypes = {
 	direction: PropTypes.string
 }

 GetCityContainer.contextTypes = {
 	router: React.PropTypes.object.isRequired
 }

GetCityContainer.defaultProps = {
	direction: 'column'
}


export default GetCityContainer