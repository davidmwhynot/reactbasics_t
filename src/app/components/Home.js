import React from 'react';

export class Home extends React.Component {
	render() {
		console.log('\nthis.props:');
		console.log(this.props); // REVIEW: this should be what we do when we are building things using React... console.log the props for an object so we can start building
		console.log('\n\n');
		return(
			<div>
				<p>In a new Component!</p>
				<p>Your name is {this.props.name}, your age is {this.props.age}</p>
				<p>User Object => Name: {this.props.user.name}</p>
				<div>
					<h4>Hobbies:</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<hr />
				{this.props.children}
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	user: React.PropTypes.object,
	children: React.PropTypes.element.isRequired
}
