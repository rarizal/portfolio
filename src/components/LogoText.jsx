import React from "react";
import { Link } from "react-router-dom";

export default function LogoText() {
	return (
		<Link to={"/"}>
			<div className="logo-container">
				<div className="logo-title">Rizal</div>
				<div className="logo-sub-title">HE/HIM</div>
			</div>
		</Link>
	);
}
