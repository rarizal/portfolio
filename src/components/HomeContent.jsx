import React from "react";
import Image from "../assets/images/placeholder.jpeg";

export default function HomeContent() {
	return (
		<div className="home-content">
			<div className="content-list-a">
				{/* <img
					src={Image}
					alt="Profile"
					style={{
						// width: "360px",
						// height: "460px",
						width: "100px",
						aspectRatio: 1 / 1.278,
						objectFit: "cover",
					}}
				/> */}
				<div className="home-img-frame">
					<img src={Image} alt="Something" />
				</div>
			</div>
			<div className="content-list-b heading-1">Code Portfolio</div>
		</div>
	);
}
