import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, browserHistory} from 'react-router'


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
	}

	render() {
		return(
				<Router history={browserHistory}>
<Route path='/home' component={Home} />
<Route path='/about' component={About} />
				</Router>
		      )
	}
}

