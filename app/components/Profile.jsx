import React from 'react'

/*export default class Profile extends React.Component {
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
}*/

let Profile = props => (

				<div>
				<p> {props.name} is {props.age} old and bio = {props.bio}</p>
				<h3>Hobbies</h3>
				<ul>
				{props.hobbies.map(hobby => <li>{hobby}</li>)}
				</ul>
				</div>
		)
export default Profile
