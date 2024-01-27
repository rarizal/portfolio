import React from "react";
import Navigation from "../components/Navigation";

export default function Thought() {
	return (
		<div className="main">
			<div className="navigation">
				<Navigation />
			</div>
			<div className="thought-section-a">Section A</div>
			<div className="thought-section-b">Section B</div>
		</div>
	);
}
