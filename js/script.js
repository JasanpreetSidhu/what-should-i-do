/**
 * Event handler attached to Flip the Dice button that gets a random task from server and renders it on the webpage
 */
async function renderRandomTask() {
	// http response object with payload, status and other headers
	const response = await fetch(
		'https://random-task-selector-backend.vercel.app/'
	);
	const randTask = await response.text(); // parsing the payload if sent by server in plain text

	let header2Node = document.getElementById('task-shown');

	// if header2Node exists(true), just change the random task
	if (header2Node) {
		header2Node.innerHTML = randTask;
	} else {
		// otherwise create header2Node with random task inside it and append to the dom inside the hero section
		const header2 = document.createElement('h2');
		header2.id = 'task-shown';
		header2.innerHTML = randTask;

		const diceImgNode = document.querySelector('section img');
		// In hero section, replacing diceImgNode with header2 Node that has random task in it
		document.getElementById('hero').replaceChild(header2, diceImgNode);
	}
}
