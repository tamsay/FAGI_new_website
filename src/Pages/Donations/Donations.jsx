import React from "react";
import PropTypes from "prop-types";

const Donations = props => {
	return (
		<div>
			{props.title}
		</div>
	);
};

Donations.defaultProps = {
	title: "Donations Page"
};

Donations.propTypes = {
	title: PropTypes.string
};

export default Donations;