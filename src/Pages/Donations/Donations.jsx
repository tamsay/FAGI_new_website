import React from "react";
import PropTypes from "prop-types";
import PageContainer from "@/components/PageContainer/PageContainer";

const Donations = props => {
	return (
		<PageContainer>
			<div>
				{props.title}
			</div>
		</PageContainer>
		
	);
};

Donations.defaultProps = {
	title: "Donations Page"
};

Donations.propTypes = {
	title: PropTypes.string
};

export default Donations;