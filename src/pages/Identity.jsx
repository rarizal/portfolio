import React from "react";
import Navigation from "../components/Navigation";
import LogoText from "../components/LogoText";

export default function Identity() {
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
			<div className="identity-section-a">Section A</div>
			<div className="identity-section-b">Section B</div>
		</div>
	);
}
