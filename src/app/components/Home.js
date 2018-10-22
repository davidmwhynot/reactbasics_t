import React from 'react';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName,
			statusTimer: setInterval(() => {
				this.setState({
					status: this.state.status + 1
				});
			}, 3000)
		};
		console.log('constructor');
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillReceiveProps(newProps) {
		console.log('componentWillReceiveProps');
		console.log(newProps);
	}

	shouldComponentUpdate(newProps, newState) {
		console.log('shouldComponentUpdate');
		console.log('newProps');
		console.log(newProps);
		console.log('newState');
		console.log(newState);
		return true;
	}

	componentWillUpdate(newProps, newState) {
		console.log('componentWillUpdate');
		console.log('newProps');
		console.log(newProps);
		console.log('newState');
		console.log(newState);
	}

	componentDidUpdate(oldProps, oldState) {
		console.log('componentDidUpdate');
		console.log('oldProps');
		console.log(oldProps);
		console.log('oldState');
		console.log(oldState);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		clearInterval(this.state.statusTimer);
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onChangeHandler(event) {
		this.setState({
			homeLink: event.target.value
		});
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
				<div className="row">
					<div className="col">
						<input className="form-control mb-1" type="text" value={this.state.homeLink} onChange={(event) => this.onChangeHandler(event)} />
					</div>
					<div className="col">
						<button onClick={() => this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
					</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	greet: React.PropTypes.func,
	initialLinkName: React.PropTypes.string
}
