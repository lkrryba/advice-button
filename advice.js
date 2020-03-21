const advice = {
	0: "Follow your heart.",
	1: "Advice is what you ask for when you already know the answer but wish you didn't.",
	2: "You know the answer to that.",
	3: "Don't repeat past mistakes.",
	4: "The only true mistake is a lesson not learned.",
	5: "If you're hiding, don't light a fire.",
	6: "Keep an open mind.",
	7: "Seize the day.",
	8: "Don't pray for an easy life. Pray for the strength to endure a difficult one.",
	9: "A stitch in time saves nine."
};

function displayAdvice() {
	let num = Math.floor(Math.random() * 10);

	document.getElementById("advice").innerHTML = advice[num];
}

function showMode() {
	let mode = document.getElementById("modes").value;
	console.log(mode);

	if (mode == "clouds") {
		let element = document.body;
		element.classList.remove("plain");
		element.classList.remove("stars");
		element.classList.add("clouds");
	} else if (mode == "stars") {
		let element = document.body;
		element.classList.remove("plain");
		element.classList.remove("clouds");
		element.classList.add("stars");
	} else {
		let element = document.body;
		element.classList.remove("clouds");
		element.classList.remove("stars");
	}
}
