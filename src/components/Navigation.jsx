import React, { useState } from "react";
import LogoText from "./LogoText";
import { Link, useLocation } from "react-router-dom";
import Kebab from "../assets/images/kebab-button.svg";

export default function Navigation() {
	const [toggle, setToggle] = useState(true);
	const location = useLocation();

	return (
		<div className="navigation">
			<div>
				<LogoText />
			</div>
			{/* Navigation in desktop */}

			<nav>
				<ul className="menu-container heading-5">
					<li
						style={{
							color:
								location.pathname === "/identity"
									? "black"
									: "inherit",
						}}
					>
						<Link to="/identity">Identity</Link>
					</li>
					<li
						style={{
							color:
								location.pathname === "/portfolio"
									? "black"
									: "inherit",
						}}
					>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li
						style={{
							color:
								location.pathname === "/bookmark"
									? "black"
									: "inherit",
						}}
					>
						<Link to="/bookmark">Bookmarks</Link>
					</li>
					<li
						style={{
							color:
								location.pathname === "/thought"
									? "black"
									: "inherit",
						}}
					>
						<Link to="/thought">Thoughts</Link>
					</li>
					<li
						style={{
							color:
								location.pathname === "/resume"
									? "black"
									: "inherit",
						}}
					>
						<Link to="/resume">Resume</Link>
					</li>
				</ul>
			</nav>
			{/* Navigation in Tablet and Mobile */}
			<div
				className="mobile-navigation"
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				<img src={Kebab} height={"35px"} alt="Kebab Button" />
			</div>
			{/* Modal and Overlay displayed only on Tablet and Mobile */}
			<div
				className="overlay-background"
				style={{ display: toggle ? "none" : "" }}
				onClick={() => setToggle(!toggle)}
			></div>
			<div className="overlay" style={{ display: toggle ? "none" : "" }}>
				<div></div>
				<div className="mobile-menu">
					<nav>
						<ul className="menu-container-mobile heading-5">
							<li
								style={{
									color:
										location.pathname === "/identity"
											? "black"
											: "inherit",
								}}
							>
								<Link to="/identity">Identity</Link>
							</li>
							<li
								style={{
									color:
										location.pathname === "/portfolio"
											? "black"
											: "inherit",
								}}
							>
								<Link to="/portfolio">Portfolio</Link>
							</li>
							<li
								style={{
									color:
										location.pathname === "/bookmark"
											? "black"
											: "inherit",
								}}
							>
								<Link to="/bookmark">Bookmarks</Link>
							</li>
							<li
								style={{
									color:
										location.pathname === "/thought"
											? "black"
											: "inherit",
								}}
							>
								<Link to="/thought">Thoughts</Link>
							</li>
							<li
								style={{
									color:
										location.pathname === "/resume"
											? "black"
											: "inherit",
								}}
							>
								<Link to="/resume">Resume</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
