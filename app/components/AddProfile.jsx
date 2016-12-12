import React from 'react'

export default class AddProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'def name',
			hobby: 'def hobby',
			bio: 'def bio'
		}
		this.handleName = this.handleName.bind(this)
		this.handleHobby = this.handleHobby.bind(this)
		this.handleBio = this.handleBio.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	handleName(e) {
		this.setState({
			name: e.target.value
				})
	}
	handleHobby(e) {
		this.setState({
			hobby: e.target.value
				})
	}
	handleBio(e) {
		this.setState({
			bio: e.target.value
				})
	}
	handleClick(e) {
		this.props.addUser({
			name: this.state.name, 
			bio: this.state.bio, 
			hobbies: [this.state.hobby] 
				})
	}
	render() {
		return (
				<div>
				<input onChange={this.handleName} value={this.state.name} />
				<input onChange={this.handleHobby} value={this.state.hobby} />
				<input onChange={this.handleBio} value={this.state.bio} />
				<button onClick={this.handleClick}> Add new profile</button>
				</div>
		       )
	}
}

