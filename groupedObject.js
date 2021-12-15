const listGrouped = document.querySelector('.list-grouped');
const items = [
  {
    type: 'meat',
    value: 'beef'
  },
  {
    type: 'meat',
    value: 'fish'
  },
  {
    type: 'meat',
    value: 'chicken'
  },
  {
    type: 'fruit',
    value: 'apple'
  },
  {
    type: 'fruit',
    value: 'banana'
  },
  {
    type: 'fruit',
    value: 'peach'
  },
  {
    type: 'fruit',
    value: 'orange'
  },
  {
    type: 'vegetable',
    value: 'beans'
  },
  {
    type: 'vegetable',
    value: 'potatoes'
  },
  {
    type: 'vegetable',
    value: 'corn'
  },
  {
    type: 'vegetable',
    value: 'carrots'
  }
];

// Group object items by type
const grouped = items.reduce(
  (acc, item) => {
    if (acc[item.type]) {
      acc[item.type].push(item);
    }
    else {
      acc[item.type] = [item];
    }
    
    return acc;
}, {});

// Generate grouped unordered list element
for (let group in grouped) {
  let listItem = document.createElement('li');
  listItem.textContent = group;
  listGrouped.appendChild(listItem);
  
  for (let item in grouped[group]) {
    let subList = document.createElement('ul');
    let subListItem = document.createElement('li');
    subListItem.textContent = grouped[group][item].value;
    subList.appendChild(subListItem);
    listItem.appendChild(subList);
  }
}