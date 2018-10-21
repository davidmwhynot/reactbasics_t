import React from 'react';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: 'ChangedLink'
		};
		setInterval(() => {
			this.setState({
				status: this.state.status + 1
			});
		}, 3000);
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	render() {

		// console.log('\nthis.props:');
		// console.log(this.props); // REVIEW: this should be what we do when we are building things using React... console.log the props for an object so we can start building
		// console.log('\n\n');

		return(
			<div>
				<p>In a new Component!</p>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<hr />
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
				<hr />
				<button onClick={() => this.props.greet(this.props.name)} className="btn btn-primary">Greet</button>
				<hr />
				<button onClick={() => this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	greet: React.PropTypes.func
}
