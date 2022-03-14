import React from "react";
import PropTypes from "prop-types";

const HomePage = ({title}) => {
	return (
		<div>
			{title}
			<p>Hello World</p>
		</div>
	);
};

HomePage.defaultProps = {
	title: "Project Landing Page"
};

HomePage.propTypes = {
	title: PropTypes.string.isRequired
};

export default HomePage;