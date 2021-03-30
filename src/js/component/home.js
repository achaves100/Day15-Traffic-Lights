import React, { useState } from "react";

export function Home() {
	const [color, setColor] = useState("red");
	return (
		<div>
			<ul className="trafficLight">
				<li
					onClick={() => setColor("red")}
					className={color == "red" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("yellow")}
					className={color == "yellow" ? "selected" : ""}></li>
				<li
					onClick={() => setColor("green")}
					className={color == "green" ? "selected" : ""}></li>
			</ul>
		</div>
	);
}
