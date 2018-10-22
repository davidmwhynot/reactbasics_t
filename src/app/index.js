import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {

	constructor(props) {
		super();
		this.state = {
			homeLink: 'Home'
		};
	}

	onGreet(name) {
		alert(`Hello, ${name}`);
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}

	render() {
		return(
			<div>
				<Header homeLink={this.state.homeLink}/>
				<div className="container">
					<Home
						name={'Max'}
						initialAge={28}
						greet={this.onGreet}
						changeLink={this.onChangeLinkName.bind(this)}
						initialLinkName={this.state.homeLink}
					/>
				</div>
			</div>
		);
	}
}

render(<App/>, $('#app')[0]);
