import React from "react";
import Navigation from "../components/Navigation";
import LogoText from "../components/LogoText";
import SamplePorto from "../assets/images/pattern3.png";

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
			<div className="portfolio-section">
				<div className="portfolio-card">
					<img src={SamplePorto} alt="Sampel" />
					<div className="portfolio-texts">
						<div className="text-style_3">Aria Scale</div>
						<div className="text-style_para">
							Budget Manager / Web Apps / Responsive
						</div>
					</div>
				</div>
				<div className="portfolio-card">
					<img src={SamplePorto} alt="Sampel" />
					<div className="portfolio-texts">
						<div className="text-style_3">PokeDashboard</div>
						<div className="text-style_para">
							Pokemon Go / Collaborative Play / Schedules
						</div>
					</div>
				</div>
				<div className="portfolio-card">
					<img src={SamplePorto} alt="Sampel" />
					<div className="portfolio-texts">
						<div className="text-style_3">Aria Scale</div>
						<div className="text-style_para">
							Budget Manager / Web Apps / Responsive
						</div>
					</div>
				</div>
				<div className="portfolio-card">
					<img src={SamplePorto} alt="Sampel" />
					<div className="portfolio-texts">
						<div className="text-style_3">Aria Scale</div>
						<div className="text-style_para">
							Budget Manager / Web Apps / Responsive
						</div>
					</div>
				</div>
				<div className="portfolio-card">
					<img src={SamplePorto} alt="Sampel" />
					<div className="portfolio-texts">
						<div className="text-style_3">Aria Scale</div>
						<div className="text-style_para">
							Budget Manager / Web Apps / Responsive
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
