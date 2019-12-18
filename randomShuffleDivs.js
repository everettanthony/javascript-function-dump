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

var createHero = function(hero) {
  let newDiv = document.createElement('div');
  let divData = '';
  newDiv.classList.add('hero');
  divData = hero; 
  newDiv.innerHTML = divData;
  
  return newDiv;
};

setInterval(function() {
  var shuffledHeroes = shuffle(heroes.slice());
  var heroesGrid = document.querySelector('.heroes');
  heroesGrid.innerHTML = '';
   
  shuffledHeroes.slice(0,4).map(h => {
    heroesGrid.appendChild(createHero(h));
  }); 
}, 1000);

