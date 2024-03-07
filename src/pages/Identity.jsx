import React from "react";
import Navigation from "../components/Navigation";
import LogoText from "../components/LogoText";
import Image from "../assets/images/placeholder.jpeg";

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
			<div className="identity-section-a">
				<div className="identity-content">
					<div className="text-style_2">
						Halo <br />
						Kamu,
					</div>
					<div className="identity-text">
						<div className="text-style_para">
							I'm Rizal, an aspiring software developer who love
							building products that seamlessly blend aesthetics
							with functionality.
						</div>
						<div className="text-style_para">
							<strong>Background</strong> — I’m a English
							linguistics graduate who now pursuing career in
							tech. I took bootcamps, watch tutorials, and newly
							enroll to computer science program.
						</div>
						<div className="text-style_para">
							<strong>Coding Experience</strong> — I took a
							bootcamp in mid 2023. I learned JavaScript,
							React.js, Node.js, Express.js, Sequelize, Figma,
							ChakraUI, Bootstrap, and Tailwind.
						</div>
						<div className="text-style_para">
							<strong>Outside the Screens</strong> — Beyond the
							world of pixels and divs, I cook, play, travel and
							enjoy good meals like every Taureans do.
						</div>
						<div className="text-style_para">
							<strong>Let’s Connect</strong> — I'm open to new
							opportunities, collaborations, or even friendships.
							You can reach me by email or social dms listed
							below. See you!
						</div>
					</div>
				</div>
				<div>
					<div
						className="text-style_4"
						// className="f-h6 fw-medium"
						style={{ padding: "3vh 0", color: "#aaaaaa" }}
					>
						Contact Information
					</div>
					<div className="identity-widget">
						<div className="identity-widget-content">
							<div className="identity-w-c-title text-style_para gray">
								Email
							</div>
							<div className="text-style_6">hello@rizal.dev</div>
						</div>
						<div className="identity-widget-content">
							<div className="identity-w-c-title text-style_para gray">
								Twitter / X
							</div>
							<div className="text-style_6">x.com/rarizalx</div>
						</div>
						<div className="identity-widget-content">
							<div className="identity-w-c-title text-style_para gray">
								LinkedIn
							</div>
							<div className="text-style_6">
								linkedin.com/in/rizalkhanafi
							</div>
						</div>
						<div className="identity-widget-content">
							<div className="identity-w-c-title text-style_para gray">
								GitHub
							</div>
							<div className="text-style_6">
								github.com/rarizal
							</div>
						</div>
						<div className="identity-widget-content">
							<div className="identity-w-c-title text-style_para gray">
								Based
							</div>
							<div className="text-style_6">Bali, Indonesia</div>
						</div>
					</div>
				</div>
			</div>
			<div className="identity-section-b">
				<img src={Image} alt="Something" />
			</div>
		</div>
	);
}
