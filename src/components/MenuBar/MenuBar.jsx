import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
import cx from "classnames";
import styles from "./MenuBar.module.scss";
import Logo from "@/assets/images/logo.svg";
import { Container, Navbar, Offcanvas, Nav, NavDropdown} from "react-bootstrap";

const MenuBar =()=> {

	const navigate = useNavigate();
	const [showMobileNav, setShowMobileNav] = useState(false);
  

	const toggleNavbar = () => {
		setShowMobileNav(!showMobileNav);
	};

	return (
		<Navbar collapseOnSelect expand="lg" className={cx("flexRow", styles.container)}>
			<Navbar.Brand className={cx(styles.siteLogo )}> 		
				<Link to="/"><img src={Logo} alt="" /></Link>
			</Navbar.Brand>
			<Navbar.Toggle className={cx(styles.navbarToggler)} aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" >
				<Nav className={cx(styles.primaryNavigation, "ms-auto")}>
					<Link to='/' >Home</Link>
					<Link to='/about-us' >About Us</Link>
					<Link to='/blog' >Blog</Link>
					<Link to='/projects' >Projects</Link>
					<Link to='/contact-us' >Contact Us</Link>
					<Link to='/donations' >Donations</Link>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
	);
};

MenuBar.propTypes = {
	title: PropTypes.string
};

export default MenuBar;