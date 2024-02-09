import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Kebab from "../assets/images/kebab-button.svg";

export default function Navigation() {
	const [toggle, setToggle] = useState(true);
	const location = useLocation();

	function checkLocation(to) {
		if (location.pathname === to) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<div>
			{/* Navigation in desktop */}
			<nav>
				<ul className="menu-container heading-5">
					<li
						style={{
							color: checkLocation("/identity")
								? "black"
								: "inherit",
						}}
					>
						<Link to="/identity">Identity</Link>
					</li>
					<li
						style={{
							color: checkLocation("/portfolio")
								? "black"
								: "inherit",
						}}
					>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li
						style={{
							color: checkLocation("/bookmark")
								? "black"
								: "inherit",
						}}
					>
						<Link to="/bookmark">Bookmarks</Link>
					</li>
					<li
						style={{
							color: checkLocation("/thought")
								? "black"
								: "inherit",
						}}
					>
						<Link to="/thought">Thoughts</Link>
					</li>
					<li
						style={{
							color: checkLocation("/resume")
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
				<div className="mobile-kebab">
					{" "}
					{/* <img
						src={Kebab}
						height={"35px"}
						alt="Kebab Button"
						onClick={() => setToggle(!toggle)}
					/> */}
				</div>
				<div className="mobile-menu">
					<nav>
						<ul className="menu-container-mobile">
							<li
								style={{
									color: checkLocation("/identity")
										? "black"
										: "inherit",
								}}
							>
								<Link to="/identity">
									Identity{" "}
									{checkLocation("/identity") ? " •" : ""}
								</Link>
							</li>
							<li
								style={{
									color: checkLocation("/portfolio")
										? "black"
										: "inherit",
								}}
							>
								<Link to="/portfolio">
									Portfolio{" "}
									{checkLocation("/portfolio") ? " •" : ""}
								</Link>
							</li>
							<li
								style={{
									color: checkLocation("/bookmark")
										? "black"
										: "inherit",
								}}
							>
								<Link to="/bookmark">
									Bookmarks{" "}
									{checkLocation("/bookmark") ? " •" : ""}
								</Link>
							</li>
							<li
								style={{
									color: checkLocation("/thought")
										? "black"
										: "inherit",
								}}
							>
								<Link to="/thought">
									Thoughts{" "}
									{checkLocation("/thought") ? " •" : ""}
								</Link>
							</li>
							<li
								style={{
									color: checkLocation("/resume")
										? "black"
										: "inherit",
								}}
							>
								<Link to="/resume">
									Resume{" "}
									{checkLocation("/resume") ? " •" : ""}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
