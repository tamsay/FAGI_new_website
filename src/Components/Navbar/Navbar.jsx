import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<div>
				<Link to='/' >Home</Link>
				<Link to='/login' >Login</Link>
				<Link to='/signup' >SignUp</Link>
				{/* <Link to='/' >Home</Link>
                <Link to='/' >Home</Link> */}
			</div>
		);
	}
}

Navbar.propTypes = {
	title: PropTypes.string
};

export default Navbar;