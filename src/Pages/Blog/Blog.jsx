import React from "react";
import PropTypes from "prop-types";

const Blog = props => {
	return (
		<div>
			{props.title}
		</div>
	);
};

Blog.defaultProps = {
	title: "Blog Page"
};

Blog.propTypes = {
	title: PropTypes.string
};

export default Blog;