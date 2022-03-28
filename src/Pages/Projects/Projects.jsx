import React from "react";
import PropTypes from "prop-types";
import PageContainer from "@/components/PageContainer/PageContainer";

const Projects = props => {
	return (
		<PageContainer>
			<div>
				{props.title}
			</div>
		</PageContainer>
		
	);
};

Projects.defaultProps = {
	title: "Projects Page"
};

Projects.propTypes = {
	title: PropTypes.string
};

export default Projects;