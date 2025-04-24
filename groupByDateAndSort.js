const list = document.querySelector('.list');

const data = [
  { date: '2024-05-15', value: 10 },
  { date: '2024-05-20', value: 15 },
  { date: '2024-06-10', value: 20 },
  { date: '2024-11-08', value: 20 },
  { date: '2025-01-05', value: 25 },
  { date: '2025-01-20', value: 30 },
  { date: '2019-07-04', value: 42 },
  { date: '2019-08-01', value: 9 },
  { date: '2005-09-12', value: 55 },
];

data.sort((a, b) => b.value - a.value); 

const groupedData = Object.groupBy(data, ({ date }) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  return year;
});

function displayData(data) {
  const keys = Object.keys(data).reverse();
  
  keys.forEach(key => {
    const hdrYear = document.createElement('h2');
    const yearNode = document.createTextNode(key);
    hdrYear.appendChild(yearNode);
    list.appendChild(hdrYear);
    
    data[key].forEach((item) => {
      const itemDiv = document.createElement('div');
      const itemNode = document.createTextNode(item.value);
      itemDiv.appendChild(itemNode);
      list.appendChild(itemDiv);      
    });
  });
}

displayData(groupedData);