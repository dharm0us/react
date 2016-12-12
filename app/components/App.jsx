import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

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
export default class App4 extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				profiles: [
				{name: 'Sunny', age: 30, hobbies: ['swimming','cricket'], bio:"bio1"},
				{name: 'Dharam', age: 29, hobbies: ['gardening','football'], bio:"bio2"},
					]
			}
		this.addUser = this.addUser.bind(this)
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
				<AddProfile addUser={this.addUser} />
				</div>
		      )
	}
}
