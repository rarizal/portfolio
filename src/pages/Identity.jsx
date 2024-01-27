import React from "react";
import Navigation from "../components/Navigation";

export default function Identity() {
	return (
		<div className="main">
			<div className="navigation">
				<Navigation />
			</div>
			<div className="identity-section-a">Section A</div>
			<div className="identity-section-b">Section B</div>
		</div>
	);
}
