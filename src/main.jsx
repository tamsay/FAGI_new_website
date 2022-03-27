import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./assets/fonts/Inter-Regular.ttf";
import "./assets/fonts/Montserrat-Regular.ttf";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
