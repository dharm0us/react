import React, { Component } from 'react'
import ReactDOM from 'react-dom'

{/*import App from './components/App'
   */}

var Y = React.createClass({
	render: function(){
		return(
			<p>Y</p>
		      )
	}
})

var X = React.createClass({
	render: function(){
		return(
			React.createElement("p","","X")
		      )
	}
})

var App = React.createClass({
	render: function(){
		return(
			<div>
			<p>Hi  oye Bhai Hello world</p>
			<X />
			<X />
			</div>
		      )
	}
})

{
	/*
	 * ES6
	 */
}
class App3 extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				profiles: [
				{name: 'Sunny', age: 30, hobbies: ['swimming','cricket'], bio:"bio1"},
				{name: 'Dharam', age: 29, hobbies: ['gardening','football'], bio:"bio2"},
					]
			}
	}

	render() {
		return(
				<div>
				<p> {this.state.profiles[0].name} </p>
				<p>ES6</p>
				</div>
		      )
	}
}

class Profile extends React.Component {
	render() {
		let hobbies = this.props.hobbies.map(hobby => {
				return <li>{hobby}</li>
		})
		return (
				<div>
				<p> {this.props.name} is {this.props.age} old and bio = {this.props.bio}</p>
				<h3>Hobbies</h3>
				<ul>
				{hobbies}
				</ul>
				</div>
		       )
	}
}

class App4 extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				profiles: [
				{name: 'Sunny', age: 30, hobbies: ['swimming','cricket'], bio:"bio1"},
				{name: 'Dharam', age: 29, hobbies: ['gardening','football'], bio:"bio2"},
					]
			}
	}

	addUser(e) {
		var user = {
			name: 'Tom',
			age: 22,
			bio: "bio default new user",
			hobbies: ['basketball','baseball']
		}
		this.setState({
			profiles: this.state.profiles.concat([user])
		})
	}

	render() {
		let profiles = this.state.profiles.map(profile => {
			return (
				<Profile
				  name={profile.name}
				  age={profile.age}
				  bio={profile.bio}
				  hobbies={profile.hobbies} />
			       )
		})

		return(
				<div>
				{profiles}
				<button onClick={this.addUser.bind(this)}> Add new profile</button>
				</div>
		      )
	}
}


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<X />, document.getElementById('app2'));
ReactDOM.render(<App3 />, document.getElementById('app3'));
ReactDOM.render(<App4 />, document.getElementById('app4'));
