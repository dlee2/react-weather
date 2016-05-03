import React, { PropTypes, Component } from 'react'

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: '90px'
  }
}




class Loading extends Component {
	constructor () {
		super()
		this.originalText = 'Loading'
		this.state = {
			text: this.originalText
		}
	}
	componentDidMount () {
		const stopper = this.originalText + '...';
		this.interval = setInterval(()  => {
			if(this.state.text === stopper) {
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}, this.props.speed)
	}
	componentWillUnmount () {
		clearInterval(this.interval)
	}
	render () {
		return (
			<div style = {styles.container}>
				<p style = {styles.content}>{this.state.text}</p>
			</div>
		)
	}
}

Loading.PropTypes = {
	text: PropTypes.string,
	speed: PropTypes.number
}

Loading.defaultProps =  {
			speed: 300
}


export default Loading