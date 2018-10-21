import React from 'react';

export const Header = (props) => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-secondary mb-3">
			<div className="container">
				<a href="#" className="navbar-brand">Navbar</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
  				<span className="navbar-toggler-icon"></span>
				</button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">{props.homeLink}</a>
			      </li>
			    </ul>
				</div>
			</div>
		</nav>
	);
};
