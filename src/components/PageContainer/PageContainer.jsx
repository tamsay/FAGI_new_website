import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./PageContainer.module.scss";


import Footer from "@/components/Footer/Footer";
import MenuBar from "@/components/MenuBar/MenuBar";

const PageContainer = (props) => {
	const { children } = props;
	return (
		<div className={cx(styles.container, "flex-col")}>
			<div className={cx(styles.menuBar)}><MenuBar  /></div>
			<div>{children}</div>
			<div className={cx(styles.footer)}><Footer  /></div>
		</div>
	);
};

PageContainer.propTypes = {
	children: PropTypes.element.isRequired
};

export default PageContainer;
