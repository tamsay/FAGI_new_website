import React from "react";
import PropTypes from "prop-types";

const ContactUs = props => {
	return (
		<div>
			{props.title}
		</div>
	);
};

ContactUs.defaultProps = {
	title: "Contact Us Page"
};

ContactUs.propTypes = {
	title: PropTypes.string
};

export default ContactUs;