import React from "react";
import Navigation from "../components/Navigation";
import LogoText from "../components/LogoText";

export default function Bookmark() {
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
			<div className="bookmark-section">
				<div className="text-style_2">
					Clippings and <br /> Stuff
				</div>
				<div className="bookmark-item">
					<div className="bookmark-card">
						<div className="bookmark-c-title text-style_6 gray">
							Tools
						</div>
						<div className="bookmark-c-cont">
							<div className="bookmark-c-data">
								<div className="text-style_4">Raycast</div>
								<div className="bookmark-c-d-desc text-style_para text-style_para">
									Spotlight with more features.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">1Password</div>
								<div className="bookmark-c-d-desc text-style_para">
									Reliable password manager.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">Arc</div>
								<div className="bookmark-c-d-desc text-style_para">
									Browser without the hassles.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">AdGuard</div>
								<div className="bookmark-c-d-desc text-style_para">
									Prevent tech stalkers.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">Pandan</div>
								<div className="bookmark-c-d-desc text-style_para">
									Know how long you have been seating.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">MassCode</div>
								<div className="bookmark-c-d-desc text-style_para">
									Your private code snippets library.
								</div>
							</div>
						</div>
					</div>
					<div className="bookmark-card">
						<div className="bookmark-c-title text-style_6 gray">
							Visual Code Extensions
						</div>
						<div className="bookmark-c-cont">
							<div className="bookmark-c-data">
								<div className="text-style_4">Prettier</div>
								<div className="bookmark-c-d-desc text-style_para">
									Make your code more efficient and looks
									better.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">LiveShare</div>
								<div className="bookmark-c-d-desc text-style_para">
									Share your code and collaborate easily.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">
									Trailing Spaces
								</div>
								<div className="bookmark-c-d-desc text-style_para">
									Helping you see code block.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">Code Pets</div>
								<div className="bookmark-c-d-desc text-style_para">
									Cute pixel pets perfect for companion.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">Fluent Icons</div>
								<div className="bookmark-c-d-desc text-style_para">
									Give your code files personality.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">
									ES7+ React/Redux/React-Native/JS snippets
								</div>
								<div className="bookmark-c-d-desc text-style_para">
									Code faster with usefull snippets.
								</div>
							</div>
						</div>
					</div>
					<div className="bookmark-card">
						<div className="bookmark-c-title text-style_6 gray">
							Websites
						</div>
						<div className="bookmark-c-cont">
							<div className="bookmark-c-data">
								<div className="text-style_4">Shapes</div>
								<div className="bookmark-c-d-desc text-style_para">
									Find your production-ready SVG images.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">Utopia</div>
								<div className="bookmark-c-d-desc text-style_para">
									Calculator for fluid web designs.
								</div>
							</div>
						</div>
					</div>
					<div className="bookmark-card">
						<div className="bookmark-c-title text-style_6 gray">
							Games
						</div>
						<div className="bookmark-c-cont">
							<div className="bookmark-c-data">
								<div className="text-style_4">Pokemon Go</div>
								<div className="bookmark-c-d-desc text-style_para">
									Catch 'em all, and proudly level 43.
								</div>
							</div>
							<div className="bookmark-c-data">
								<div className="text-style_4">
									Mobile Legends
								</div>
								<div className="bookmark-c-d-desc text-style_para">
									Good one for group play and coffee.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
