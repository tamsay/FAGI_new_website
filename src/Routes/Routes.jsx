// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/Signup/SignUp";
import Page404 from "../Pages/Page404/Page404";

import Navbar from "../Components/Navbar/Navbar";

const RoutesComponent = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<HomePage  />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<SignUp />} />
				<Route exact path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>

	);
};

export default RoutesComponent;