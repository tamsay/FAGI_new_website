import React from "react";
import PropTypes from "prop-types";

const AboutUs = props => {
	return (
		<div>
			{props.title}
		</div>
	);
};

AboutUs.defaultProps = {
	title: "About Us Page"
};

AboutUs.propTypes = {
	title: PropTypes.string
};

export default AboutUs;