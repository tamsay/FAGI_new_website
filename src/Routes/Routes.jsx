// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Donations from "../Pages/Donations/Donations";
import Projects from "../Pages/Projects/Projects";
import HomePage from "../Pages/HomePage/HomePage";
import Page404 from "../Pages/Page404/Page404";

const RoutesComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<HomePage  />} />
				<Route exact path="/about-us" element={<AboutUs  />} />
				<Route exact path="/blog" element={<Blog  />} />
				<Route exact path="/contact-us" element={<ContactUs  />} />
				<Route exact path="/donations" element={<Donations  />} />
				<Route exact path="/projects" element={<Projects  />} />
				<Route exact path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>

	);
};

export default RoutesComponent;