import React from "react";
import Navigation from "../components/Navigation";

export default function Home() {
	return (
		<div className="main">
			<div className="navigation">
				<Navigation />
			</div>
			<div className="home-section-a">Section A</div>
			<div className="home-section-b">Section B</div>
		</div>
	);
}
