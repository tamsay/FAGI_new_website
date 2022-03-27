import React from "react";
import cx from "classnames";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import siteLogo from "@/assets/images/logo.svg";
import bgImage from "@/assets/images/footer-bg.png";

const Footer = () => {
	const navigate = useNavigate();

	return (

		<div style={{backgroundImage: `url(${bgImage})`}} className={cx(styles.footerContainer, "flexRow")}>

			<div className={cx(styles.profileSummary)}>
				<div><img src={siteLogo} alt="site-logo" /></div>
				<p>Food and Genes Initiative (FAGI) is a nonprofit organization aimed at creating interventions through awareness, research and technology.</p>
				<p>© 2022 FAGI. All rights reserved.</p>
			</div>

			<div className={cx(styles.contactDetails)}>
				<h3>Get In Touch</h3>
				<div className={cx("flexRow-align-center")}>
					<Icon icon="akar-icons:location" /><p>42 Montgomery Street, Yaba
							Lagos, Nigeria</p>
				</div>
				<div className={cx("flexRow-align-center")}>
					<Icon icon="ant-design:mail-outlined" /><p>contact@foodandgenes.org</p>
				</div>
				<div className={cx("flexRow-align-center")}>
					<Icon icon="akar-icons:phone" /><p>+2348102443104</p>
				</div>

			</div>

			<div className={cx(styles.informationLinks)}>
				<h3>Quick Links</h3>
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>BLOG</li>
					<li>Projects</li>
					<li>Contact Us</li>
					<li>Donations</li>
				</ul>
			</div>

		</div>

	);
};

export default Footer;
