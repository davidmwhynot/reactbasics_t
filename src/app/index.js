import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {

	constructor(props) {
		super();
		this.state = {
			homeLink: 'Home',
			homeMounted: true
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

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		});
	}

	render() {
		let homeComponent = '';
		if(this.state.homeMounted) {
			homeComponent = (
				<Home
					name={'Max'}
					initialAge={28}
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initialLinkName={this.state.homeLink}
				/>
			);
		}
		return(
			<div>
				<Header homeLink={this.state.homeLink}/>
				<div className="container">
					<div className="row">
						<div className="col">
							{homeComponent}
						</div>
						<div className="col">
							<button onClick={() => this.onChangeHomeMounted()} className="btn btn-block btn-outline-primary">Toggle Home Component</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, $('#app')[0]);
