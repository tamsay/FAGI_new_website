import React from "react";
import PropTypes from "prop-types";

const Page404 = props => {
	return (
		<div>
			{props.title}
		</div>
	);
};

Page404.defaultProps = {
	title: "Page Not Found"
};

Page404.propTypes = {
	title: PropTypes.string
};

export default Page404;