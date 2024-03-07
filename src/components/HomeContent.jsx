import React from "react";
import Image from "../assets/images/placeholder.jpeg";

export default function HomeContent() {
	return (
		<div className="home-content">
			<div className="content-list-a">
				<div className="home-img-frame">
					<img src={Image} alt="Something" />
				</div>
			</div>
			<div className="content-list-b text-style_1">Code Portfolio</div>
		</div>
	);
}
