import React, { Component } from 'react'
import GetCity from '../components/GetCity'


const styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
  	display: 'flex',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	background: 'rgba(252,90,44,0.89)',
  	color: '#fff',
  	padding: 5
  }

};


class Main extends Component{
	render () {
		return (

			<div style = {styles.container}>
				<div style = {styles.header}>
					<h2 style = {{margin: 0}}> <a style = {{color:"white"}} href = "/">The Weather App</a> </h2>
					<GetCity direction = 'row' />
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default Main