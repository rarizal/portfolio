import React from "react";
import Navigation from "../components/Navigation";
import LogoText from "../components/LogoText";

export default function Thought() {
	return (
		<div className="main">
			<div className="navigation">
				<div>
					<LogoText />
				</div>
				<div>
					<Navigation />
				</div>
			</div>
			<div className="thought-section-a">Section A</div>
			<div className="thought-section-b">Section B</div>
		</div>
	);
}
