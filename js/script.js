function getRandomTask() {
	let tasks = [
		'Read Learn to Earn',
		'Complete Brad Traversy Course',
		'Complete DSA Course',
		'Complete Docker K8s Course',
		'Learn AI & ML Foundations',
		'Practice on NoSQL databases',
		'Practice leetcode problems',
		'create full-stack project using linkedin learning',
		'check google trending articles',
		'read about recent updates in software industry',
	];

	if (tasks.length == 0) {
		return 'No tasks in the list';
	} else {
		// Math.random() * num => ( 0 to 0.99999... ) * num = 0 to (num-1).99999...
		randIndex = parseInt(Math.random() * tasks.length);
		return tasks[randIndex];
	}
}

async function renderRandomTask() {
	const response = await fetch(
		'https://random-task-selector-backend.vercel.app/'
	);
	const randTask = await response.text();

	let randTaskNode = document.getElementById('task-shown');

	if (randTaskNode) {
		randTaskNode.innerText = randTask;
	} else {
		const header2 = document.createElement('h2');
		header2.id = 'task-shown';
		randTaskNode = document.createTextNode(randTask);
		header2.appendChild(randTaskNode);

		const diceImgNode = document.querySelector('section img');

		document.getElementById('hero').replaceChild(header2, diceImgNode);
	}
}
