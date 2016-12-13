import React from 'react'
import ReactDOM from 'react-dom'
import {Link, Route, Router, browserHistory} from 'react-router'



export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
				<div>
				<header>
				<div>
				<p>Welcome to the app </p>
				<nav>
				<Link to='/home'>Home</Link>
				<Link to='/about'>About</Link>
				</nav>
				{this.props.children}
				</div>
				</header>
				<footer>
				Our Footer
				</footer>
				</div>

		      )
	}
}

