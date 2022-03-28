import React from "react";
import PropTypes from "prop-types";
import PageContainer from "@/components/PageContainer/PageContainer";

const Blog = props => {
	return (
		<PageContainer>
			<div>
				{props.title}
			</div>
		</PageContainer>
		
	);
};

Blog.defaultProps = {
	title: "Blog Page"
};

Blog.propTypes = {
	title: PropTypes.string
};

export default Blog;