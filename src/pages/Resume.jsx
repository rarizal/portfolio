import React from "react";
import Navigation from "../components/Navigation";
import LogoText from "../components/LogoText";
import CV from "../assets/images/TranslationCV.jpg";

export default function Resume() {
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
			<div className="resume-section">
				<div className="resume-img-frame">
					<img src={CV} alt="CV" />
				</div>
				<div className="resume-action">
					<div className="resume-a-card text-style_para">
						Download
					</div>
					<div className="resume-a-card text-style_para">
						Copy Link
					</div>
				</div>
			</div>
		</div>
	);
}
