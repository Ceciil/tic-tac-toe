var grid = document.getElementById('grid');
var gameEnd = false;
var count = 0;

if (gameEnd) {
	console.log('The game is over.');
} else {
	grid.addEventListener('click', function (event) {
		if (event.target.innerHTML === 'X' || event.target.innerHTML === 'O') {
			return;
		}
		if (count > 9) {
			gameEnd = true;
		}
		if (count % 2 === 0) {
			event.target.innerHTML = 'X';
			count++;
			checkWinCondition();
		} else {
			event.target.innerHTML = 'O';
			count++;
			checkWinCondition();
		}
	});
}

var checkWinCondition = function () {
	var one = document.getElementById('1').innerHTML;
	var two = document.getElementById('2').innerHTML;
	var three = document.getElementById('3').innerHTML;
	var four = document.getElementById('4').innerHTML;
	var five = document.getElementById('5').innerHTML;
	var six = document.getElementById('6').innerHTML;
	var seven = document.getElementById('7').innerHTML;
	var eight = document.getElementById('8').innerHTML;
	var nine = document.getElementById('9').innerHTML;
	if (
		(one === 'X' && two === 'X' && three === 'X') ||
		(one === 'O' && two === 'O' && three === 'O')
	) {
		winNotices();
	} else if (
		(four === 'X' && five === 'X' && six === 'X') ||
		(four === 'O' && five === 'O' && six === 'O')
	) {
		winNotices();
	} else if (
		(seven === 'X' && eight === 'X' && nine === 'X') ||
		(seven === 'O' && eight === 'O' && nine === 'O')
	) {
		winNotices();
	} else if (
		(one === 'X' && four === 'X' && seven === 'X') ||
		(one === 'O' && four === 'O' && seven === 'O')
	) {
		winNotices();
	} else if (
		(two === 'X' && five === 'X' && eight === 'X') ||
		(two === 'O' && five === 'O' && eight === 'O')
	) {
		winNotices();
	} else if (
		(three === 'X' && six === 'X' && nine === 'X') ||
		(three === 'O' && six === 'O' && nine === 'O')
	) {
		winNotices();
	} else if (
		(one === 'X' && five === 'X' && nine === 'X') ||
		(one === 'O' && five === 'O' && nine === 'O')
	) {
		winNotices();
	} else if (
		(three === 'X' && five === 'X' && seven === 'X') ||
		(three === 'O' && five === 'O' && seven === 'O')
	) {
		winNotices();
	} else if (count === 9) {
		alert('No one wins!');
		gameEnd = true;
		document.getElementById('button').style.display = 'block';
	}
};

var winNotices = function () {
	gameEnd = true;
	alert('You win!');
	document.getElementById('button').style.display = 'block';
};

document.getElementById('button').addEventListener('click', function (event) {
	resetGrid();
	count = 0;
	document.getElementById('button').style.display = 'none';
});

var resetGrid = function () {
	var one = (document.getElementById('1').innerHTML = '');
	var two = (document.getElementById('2').innerHTML = '');
	var three = (document.getElementById('3').innerHTML = '');
	var four = (document.getElementById('4').innerHTML = '');
	var five = (document.getElementById('5').innerHTML = '');
	var six = (document.getElementById('6').innerHTML = '');
	var seven = (document.getElementById('7').innerHTML = '');
	var eight = (document.getElementById('8').innerHTML = '');
	var nine = (document.getElementById('9').innerHTML = '');
};
