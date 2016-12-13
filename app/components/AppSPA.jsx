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
				<p>Welcome to the app </p>
				<Link to='/home'>Home</Link>
				<Link to='/about'>About</Link>
				</div>

		      )
	}
}

