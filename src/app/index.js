import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
	render() {
		let user = {
			name: 'Anna',
			hobbies: ['Sports']
		};
		return(
			<div>
				<Header/>
				<div className="container">
					<Home name={'Max'} age={28} user={user}>
						<p>This is a child!</p>
					</Home>
				</div>
			</div>
		);
	}
}

render(<App/>, $('#app')[0]);
