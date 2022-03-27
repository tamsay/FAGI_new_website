import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = props => {
	const {title, type="button", borderRadiusType, textColor, bgColor, bordercolor, routePath, checked, checkedBtn, icon, disabled = false, loading, onClick} = props;

	return (	
		<button type onClick={onClick} disabled={disabled} className={cx(styles.btn,  borderRadiusType ? styles[`${borderRadiusType}`] : null, "flexRow"  )} style={{ color: `${textColor}`, backgroundColor: `${bgColor}`, borderColor: `${bordercolor}`, border: bordercolor ? "1px solid" : "none"}}>
			{loading ? ( <img
				src="https://app.peerlesslms.com/website/img/three-dots.svg"
				width="60"
				alt=""
				id="request_spinner1"
			             />) : (
				<>
					<span className={cx(styles.iconDiv)}>{icon && icon}</span>
					{checkedBtn && <input checked={checked} type="checkbox" />}
					{title}
				</>
			)}
			
		</button>	
	);
};

Button.defaultProps = {
	borderRadiusType: "fullyRounded",
	title: "",
	textColor: "",
	bgColor: "",
	bordercolor: "",
	routePath: "#"   
};
Button.propTypes = {
	borderRadiusType: PropTypes.string,
	title: PropTypes.string,
	textColor: PropTypes.string,
	bgColor: PropTypes.string,  
	bordercolor: PropTypes.string,
	routePath: PropTypes.string  
};

export default Button;


