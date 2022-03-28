import React from "react";
import PropTypes from "prop-types";
import PageContainer from "@/components/PageContainer/PageContainer";

const AboutUs = props => {
	return (
		<PageContainer>
			<div>
				{props.title}
			</div>
		</PageContainer>
		
	);
};

AboutUs.defaultProps = {
	title: "About Us Page"
};

AboutUs.propTypes = {
	title: PropTypes.string
};

export default AboutUs;