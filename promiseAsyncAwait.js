// Using asnyc/await to Fetch Data From a Server
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

// Consuming Data Using the async Function
fetchData()
  .then((data) => {
    console.log(data); // Handle the fetched data
  })
  .catch((error) => {
    console.error(error.message); // Handle errors
  });


// Using Fetch API for AJAX Calls
function fetchData(url) {
  fetch(url)
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => console.log(data)) // Handle the data
    .catch((error) => console.error('Error fetching data:', error)) // Handle any errors
}

// Example usage
fetchData('https://api.example.com/data');