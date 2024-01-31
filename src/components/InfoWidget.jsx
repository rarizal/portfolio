import React from "react";
import useViewport from "./hooks/useViewport";

export default function InfoWidget() {
	const { width, height } = useViewport();
	return (
		<div className="widget-container">
			<div className="widget-list heading-5">
				<div className="widget-title">About</div>
				<div className="widget-content">
					Rizal Khanafi <br />
					Software Developer <br />
					Portfolio 2023-2024 <br />
					Width: {width} <br />
					Height: {height}
				</div>
			</div>
			<div className="widget-list heading-5">
				<div className="widget-title">Contact</div>
				<div className="widget-content">
					hello@rizal.dev <br />
					@rzlknfi
				</div>
			</div>
			<div className="widget-list heading-5">
				<div className="widget-title">Information</div>
				<div className="widget-content">
					www.rizal.dev <br />
					linked.in/rizalkhanafi <br />
					github.com/rarizal
				</div>
			</div>
		</div>
	);
}
