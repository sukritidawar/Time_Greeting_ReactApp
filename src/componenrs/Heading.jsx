import React from "react";

function Heading() {
	const date = new Date();
	const currentTime_hours = date.getHours();
	const currentTime_mins = date.getMinutes();
	const currentTime_secs = date.getSeconds();

	let greeting;

	const customStyle = {
		color: ""
	};

	if (currentTime_hours < 12) {
		greeting = "Good Morning";
		customStyle.color = "red";
	} else if (currentTime_hours < 18) {
		greeting = "Good Afternoon";
		customStyle.color = "green";
	} else {
		greeting = "Good Night";
		customStyle.color = "blue";
	}

	return (
		<div>
			<h1>
				Current time: {currentTime_hours} : {currentTime_mins} :
				{currentTime_secs}
			</h1>
			,
			<h1 className="heading" style={customStyle}>
				{greeting}
			</h1>
		</div>
	);
}

export default Heading;
