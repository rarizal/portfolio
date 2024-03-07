import React from "react";
import { Link } from "react-router-dom";

export default function LogoText() {
	return (
		<Link to={"/"}>
			<div className="logo-container">
				<div className="f-h6 fw-semibold">Rizal</div>
				<div className="f-small fw-regular ls-m">HE/HIM</div>
				{/* <div className="f-small fw-regular ls-m">REACT.JS</div> */}
			</div>
		</Link>
	);
}
