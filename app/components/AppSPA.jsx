import React from 'react'
import ReactDOM from 'react-dom'


class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
				<div>
				<p>
			Welcome Home	
				</p>
				</div>
		      )
	}
}

class About extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
				<div>
				<p>
				About Us
				</p>
				</div>
		      )
	}
}


export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.showHome = this.showHome.bind(this)
		this.showAbout = this.showAbout.bind(this)
		this.state = {view: <Home/>}
	}

	showHome() {
		this.setState({view: <Home/>})
	}

	showAbout() {
		this.setState({view: <About/>})
	}

	render() {
		return(
				<div>
				{this.state.view}
				<button onClick={this.showHome}> Show Home </button>
				<button onClick={this.showAbout}> Show About </button>
				</div>
		      )
	}
}

