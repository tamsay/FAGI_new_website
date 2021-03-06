import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import PageContainer from "@/components/PageContainer/PageContainer";
// import Testimonials from "@/components/Testimonials/Testimonials";
import cx from "classnames";
import styles from "./HomePage.module.scss";
import { Card} from "react-bootstrap";
import heroImage from "@/assets/images/homepage-hero.png";
import purposeBgImg from "@/assets/images/purpose_bg.png";
import BlogBgImg from "@/assets/images/blog_bg.png";
import BlogThumbnail from "@/assets/images/blog_thumbnail.png";
import Button from "@/components/Button/Button";
import ProjectImage1 from "@/assets/images/projectContainer1.png";
import ProjectImage2 from "@/assets/images/projectContainer2.png";
import ProjectImage3 from "@/assets/images/projectContainer3.png";
import ProjectImage4 from "@/assets/images/projectContainer4.png";
import { Icon } from "@iconify/react";

const HomePage = () => {

	const navigate = useNavigate();

	const words = ["RESEARCH", "TECHNOLOGY", "DEVELOPMENT"];
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [blink, setBlink] = useState(true);
	const [reverse, setReverse] = useState(false);

	// typeWriter
	useEffect(() => {
		if (index === words.length - 1 && subIndex === words[index].length) {
			return;
		}

		if (
			subIndex === words[index].length + 1 && 
      index !== words.length - 1 && 
      !reverse 
		) {
			setReverse(true);
			return;
		}

		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => prev + 1);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
			150, parseInt(Math.random() * 350)));

		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse]);

	// blinker
	useEffect(() => {
		const timeout2 = setTimeout(() => {
			setBlink((prev) => !prev);
		}, 500);
		return () => clearTimeout(timeout2);
	}, [blink]);
	

	return (
		<PageContainer>
			<div className={cx(styles.homePageWrapper)}>
				<div className={cx(styles.container)}>
					<div className={cx(styles.heroDiv, "flexRow-fully-centered")} style={{backgroundImage: `url(${heroImage})`}}>

						<div className={cx(styles.heroText, "flexCol-align-center")}>

							<p className="text-center  pb-4">Improving the wellbeing of Africans through <br /> <span className={cx(styles.variableText)}>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span> </p>

							<div className={cx(styles.btnDiv, "flexRow-fully-centered")}>
								<Button onClick={()=>navigate("/")} title="Read More" borderRadiusType="lowRounded" textColor="#fff" bordercolor = "" bgColor="#A01F45"/>
							</div>
						</div>

					</div>
				</div>

				<div className={cx(styles.container)}>
					<div className={cx(styles.visionAndMissionDiv)}>
						<div className={cx("row")}>
							<div className={cx("col-3", "flexRow-fully-centered", styles.title)}>Our Vision</div>
							<div className={cx("col-9", "flexRow-fully-centered", styles.textContent)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
						</div>
						<div className={cx("row")}>
							<div className={cx("col-9", "flexRow-fully-centered", styles.textContent)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							<div className={cx("col-3", "flexRow-fully-centered", styles.title)}>Our Mission</div>
						</div>
					</div>
				</div>

				<div className={cx(styles.container)}>
					<div className={cx(styles.projectsDiv)}>
						<div className={cx(styles.header, "flexRow-space-between-align-flex-end")}>
							<h2 className={cx(styles.title)}>Projects</h2>
							<Button onClick={()=>navigate("/")} title="See All" borderRadiusType="lowRounded" textColor="#1242D4" bordercolor = "" bgColor="#CED9F4"/>
						</div>

						<div className={cx(styles.projects)}>
							<div className={cx(styles.mainCardDiv)}>
								
								<Card className={cx(styles.cardItem)}>
									<Card.Header className={cx(styles.cardHeader, "flexCol")}>
										<div className={cx(styles.imageDiv)}>
											<img src={ProjectImage1} alt="" />
										</div>
									</Card.Header>
									<Card.Body className={cx(styles.cardBody)}>
										<small>August 8, 2017</small>
										<div><p>Feed Ibadan Project</p><Icon icon="akar-icons:chevron-right" color="white" /></div>
									</Card.Body>
								</Card>
							</div>
							<div className={cx(styles.subCardsDiv)}>
								<div className={cx(styles.cardWrapper)}>
									<Card className={cx(styles.cardItem)}>
										<Card.Header className={cx(styles.cardHeader)}>
											<div className={cx(styles.imageDiv)}>
												<img src={ProjectImage2} alt="" />
											</div>
										</Card.Header>
										<Card.Body className={cx(styles.cardBody)}>
											<small>August 8, 2017</small>
											<div><p>Feed Ibadan Project</p><Icon icon="akar-icons:chevron-right" color="white" /></div>
										</Card.Body>
									</Card>
								</div>
								<div className={cx(styles.cardWrapper)}>	
									<Card className={cx(styles.cardItem)}>
										<Card.Header className={cx(styles.cardHeader)}>
											<div className={cx(styles.imageDiv)}>
												<img src={ProjectImage3} alt="" />
											</div>
										</Card.Header>
										<Card.Body className={cx(styles.cardBody)}>
											<small>August 8, 2017</small>
											<div><p>Feed Ibadan Project</p><Icon icon="akar-icons:chevron-right" color="white" /></div>
										</Card.Body>
									</Card></div>
								<div className={cx(styles.cardWrapper)}>	
									<Card className={cx(styles.cardItem)}>
										<Card.Header className={cx(styles.cardHeader)}>
											<div className={cx(styles.imageDiv)}>
												<img src={ProjectImage4} alt="" />
											</div>
										</Card.Header>
										<Card.Body className={cx(styles.cardBody)}>
											<small>August 8, 2017</small>
											<div><p>Feed Ibadan Project</p><Icon icon="akar-icons:chevron-right" color="white" /></div>
										</Card.Body>
									</Card></div>
							</div>
						</div>
					</div>
				</div>

				<div style={{backgroundImage: `url(${purposeBgImg})`}} className={cx(styles.container, styles.ourPurposeSection)}>
					<h2>Our Purpose</h2>
					<div className={cx(styles.cardWrapper, "flexRow")}>
						<Card className={cx(styles.cardItem)}>
							<Card.Header className={cx(styles.cardHeader, "flexCol", "h-100")}>
								<p className={cx(styles.countDiv)}>1</p>
								<h3>Malnutrition</h3>
							</Card.Header>
							<Card.Body className={cx(styles.cardBody)}>
							Make the appearance of a mobile application that has quality and increases user convenience</Card.Body>
							<Card.Footer className={cx(styles.cardFooter)}>
								<Button onClick={()=>navigate("/")} title="READ MORE" borderRadiusType="lowRounded" textColor="#1242D4" bordercolor = "" bgColor="#CED9F4"/>
							</Card.Footer>
						</Card>

						<Card className={cx(styles.cardItem)}>
							<Card.Header className={cx(styles.cardHeader, "h-100", "flexCol")}>
								<p className={cx(styles.countDiv)}>2</p>
								<h3>Non-Communicable Diseases</h3>
							</Card.Header>
							<Card.Body className={cx(styles.cardBody)}>
							Help create a website and redesign it so that it becomes a website that is more trendy and looks fresh</Card.Body>
							<Card.Footer className={cx(styles.cardFooter)}>
								<Button onClick={()=>navigate("/")} title="READ MORE" borderRadiusType="lowRounded" textColor="#1242D4" bordercolor = "" bgColor="#CED9F4"/>
							</Card.Footer>
						</Card>

						<Card className={cx(styles.cardItem)}>
							<Card.Header className={cx(styles.cardHeader, "h-100", "flexCol")}>
								<p className={cx(styles.countDiv)}>3</p>
								<h3>Substance Abuse</h3>
							</Card.Header>
							<Card.Body className={cx(styles.cardBody)}>
							Create customizable illustrations with attractive designs that are made visually through high creativity</Card.Body>
							<Card.Footer className={cx(styles.cardFooter)}>
								<Button onClick={()=>navigate("/")} title="READ MORE" borderRadiusType="lowRounded" textColor="#1242D4" bordercolor = "" bgColor="#CED9F4"/>
							</Card.Footer>
						</Card>
					
					</div>

				</div>

				<div style={{backgroundImage: `url(${BlogBgImg})`}} className={cx(styles.container, styles.blogSection)}>
					<div className={cx(styles.header, "flexRow-space-between-align-flex-end")}>
						<h2>Blog</h2>
						<Button onClick={()=>navigate("/")} title="READ MORE" borderRadiusType="lowRounded" textColor="#1242D4" bordercolor = "" bgColor="#CED9F4"/>
					</div>
					<div className={cx(styles.cardWrapper, "flexRow")}>
						<Card className={cx(styles.cardItem)}>
							<Card.Header className={cx(styles.cardHeader, "flexCol")}>
								<div className={cx(styles.imageDiv)}>
									<img src={BlogThumbnail} alt="blog-thumbnail" />
								</div>
								<small>27th February 2022</small>
							</Card.Header>
							<Card.Body className={cx(styles.cardBody)}>
								<h3>FOOD AND GENES INITIATIVE AT THE WORLD ECONOMIC FORUM</h3>
								<p>
								The Food and genes Initiative, an organization based in Nigeria with the aim of improving the wellbeing and lifestlye of.
								</p>
							</Card.Body>
							
						</Card>

						<Card className={cx(styles.cardItem)}>
							<Card.Header className={cx(styles.cardHeader,  "flexCol")}>
								<div className={cx(styles.imageDiv)}>
									<img src={BlogThumbnail} alt="blog-thumbnail" />
								</div>
								<small>28th February 2022</small>
							</Card.Header>
							<Card.Body className={cx(styles.cardBody)}>
								<h3>FOOD AND GENES INITIATIVE AT THE WORLD ECONOMIC FORUM</h3>
								<p>
								The Food and genes Initiative, an organization based in Nigeria with the aim of improving the wellbeing and lifestlye of.
								</p>
							</Card.Body>
							
						</Card>

						<Card className={cx(styles.cardItem)}>
							<Card.Header className={cx(styles.cardHeader,  "flexCol")}>
								<div className={cx(styles.imageDiv)}>
									<img src={BlogThumbnail} alt="blog-thumbnail" />
								</div>
								<small>29th February 2022</small>
							</Card.Header>
							<Card.Body className={cx(styles.cardBody)}>
								<h3>CORONA VIRUS: THE TRUTH AGAINST THE MYTH</h3>
								<p>
								The outbreak of a new type of coronavirus in the city of Wuhan, capital of central Hubei province in china has raised a lot of public health concerns across the world.
								</p>
							</Card.Body>
							
						</Card>
					
					</div>

				</div>


				{/* <Testimonials /> */}
			</div>
			

		</PageContainer>
	);
};

HomePage.defaultProps = {
	title: "Project Landing Page"
};

HomePage.propTypes = {
	title: PropTypes.string.isRequired
};

export default HomePage;