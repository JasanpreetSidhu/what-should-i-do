function getRandomTask() {
	let tasks = [];

	if (tasks.length == 0) {
		return 'No tasks in the list';
	} else {
		// Math.random() * num => ( 0 to 0.99999... ) * num = 0 to (num-1).99999...
		randIndex = parseInt(Math.random() * tasks.length);
		return tasks[randIndex];
	}
}

function renderRandomTask() {
	const randTask = getRandomTask();

	const header2 = document.createElement('h2');
	const randTaskNode = document.createTextNode(randTask);
	header2.appendChild(randTaskNode);

	const diceImgNode = document.querySelector('section img');

	document.getElementById('hero').replaceChild(header2, diceImgNode);
}
