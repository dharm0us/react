import React from 'react'

export default class AddProfile extends React.Component {
	render() {
		return (
				<button onClick={this.props.addUser}> Add new profile</button>
		       )
	}
}

