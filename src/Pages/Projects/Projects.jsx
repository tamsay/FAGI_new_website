import React from "react";
import PropTypes from "prop-types";

const Projects = props => {
	return (
		<div>
			{props.title}
		</div>
	);
};

Projects.defaultProps = {
	title: "Projects Page"
};

Projects.propTypes = {
	title: PropTypes.string
};

export default Projects;