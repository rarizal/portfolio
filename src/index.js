import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Identity from "./pages/Identity";
import Portfolio from "./pages/Portfolio";
import Bookmark from "./pages/Bookmark";
import Thought from "./pages/Thought";
import Resume from "./pages/Resume";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/identity" element={<Identity />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/bookmark" element={<Bookmark />} />
				<Route path="/thought" element={<Thought />} />
				<Route path="/resume" element={<Resume />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
