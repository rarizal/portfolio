import React from "react";

export default function InfoWidget() {
	return (
		<div className="widget-container">
			<div className="widget-list ">
				<div className="widget-title text-style_5 fw-medium gray">
					About
				</div>
				<div className="text-style_5 fw-regular black">
					Rizal Khanafi <br />
					Software Developer <br />
					Portfolio 2023-2024 <br />
				</div>
			</div>
			<div className="widget-list ">
				<div className="widget-title text-style_5 fw-medium gray">
					Contact
				</div>
				<div className="text-style_5 fw-regular black">
					hello@rizal.dev <br />
					@rzlknfi
				</div>
			</div>
			<div className="widget-list">
				<div className="widget-title text-style_5 fw-medium gray">
					Information
				</div>
				<div className="text-style_5 fw-regular black">
					www.rizal.dev <br />
					linked.in/rizalkhanafi <br />
					github.com/rarizal
				</div>
			</div>
		</div>
	);
}
