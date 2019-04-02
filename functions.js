// Filter out items from a given array
// Example: I want to remove all cats from a given array of animal species
var animals = ['Siamese', 'Elephant, Labrador', 'Maltese', 'Persian', 'Sphynx', 'Black Rhino', 'German Shepard', 'Pit Bull'];
var cats = ['Siamese', 'Persian', 'Sphynx'];

function filterOutItems(arr, items) { 
  var filtered = arr.filter(function(elem) {
    return items.indexOf(elem) === -1;
  });
  
  return filtered;
}

//--- ES6 ---//
function filterOutItemsV2(animals, items) {
  return animals.filter(item => !items.includes(item));
};

console.log(filterOutItems(animals, cats));