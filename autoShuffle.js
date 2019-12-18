var doTheShuffle = (function() {
  var shuffle = document.getElementById('shuffle');
  var shufDivs = shuffle.querySelectorAll('.hue');
  
  return function() {
    shuffle.innerHTML = '';
    var clone = Array.from(shufDivs);
 
    for (var i = 0; i < 2; ++i) {
      shuffle.append(clone.splice(Math.floor(Math.random() * clone.length), 1)[0]);
    }
  }
})();

doTheShuffle();
setInterval(doTheShuffle, 2000);