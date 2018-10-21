import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
	render() {
		return(
			<div>
				<Header/>
				<div className="container">
					<Home name={'Max'} initialAge={28}/>
				</div>
			</div>
		);
	}
}

render(<App/>, $('#app')[0]);
