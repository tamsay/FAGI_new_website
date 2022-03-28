import React from "react";
import PropTypes from "prop-types";
import PageContainer from "@/components/PageContainer/PageContainer";

const ContactUs = props => {
	return (
		<PageContainer>
			<div>
				{props.title}
			</div>
		</PageContainer>
		
	);
};

ContactUs.defaultProps = {
	title: "Contact Us Page"
};

ContactUs.propTypes = {
	title: PropTypes.string
};

export default ContactUs;