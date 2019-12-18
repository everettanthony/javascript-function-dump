var heroes = [
  'Captain America',
  'Iron Man',
  'Thor',
  'Hulk',
  'Spider-Man',
  'Black Panther',
  'Doctor Strange',
  'Professor X',
  'Namor',
  'Captain Marvel',
  'Wasp',
  'Ant Man',
  'Mister Fantastic'
];

var shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};


setInterval(function() {
  var shuffledHeroes = shuffle(heroes.slice());
  shuffledHeroes.slice(0,4).map(el => console.log(el)); 
}, 3000);