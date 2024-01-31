import React from "react";
import Navigation from "../components/Navigation";
import LogoText from "../components/LogoText";

export default function Portfolio() {
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
			<div className="portfolio-section">Section</div>
		</div>
	);
}
