import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'
import {getProfiles} from '../utils/profileApi.js'

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

var MyComponent = props => ( 
	<div>
		<p> I am a function component </p>
		<p> {props.x} </p>
		</div>
		)

export default class App4 extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				profiles: []
			}
		this.addUser = this.addUser.bind(this)
	}
	
	componentDidMount() {
		/* Response of the API should look like this
		 * [{
 "name": "name1", "age": "age1", "bio": "bio1", "hobbies": ["h1","h2"]
},
{
 "name": "name1", "age": "age1", "bio": "bio1", "hobbies": ["h1","h2"]
}
]
		 */
		
			getProfiles().then(data => {this.setState({profiles: data})})
	}

	addUser(newProfile) {
		this.setState({
			profiles: this.state.profiles.concat([newProfile])
		})
	}

	render() {
		console.log('app rendered')
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
				<MyComponent x='hello' />
				</div>
		      )
	}
}
