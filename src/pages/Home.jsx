import React from "react";
import Navigation from "../components/Navigation";
import LogoText from "../components/LogoText";
import InfoWidget from "../components/InfoWidget";
import HomeContent from "../components/HomeContent";

export default function Home() {
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
			<div className="home-section-a">
				<HomeContent />
			</div>
			<div className="home-section-b">
				<InfoWidget />
			</div>
		</div>
	);
}
