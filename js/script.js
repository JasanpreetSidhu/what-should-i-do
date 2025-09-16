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
	let randTask = getRandomTask();
	document.getElementById('Hero').innerHTML = randTask;
}
