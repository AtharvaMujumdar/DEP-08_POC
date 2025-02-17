const pollInterval = 5000; // 5 seconds

const fetchData = () => {
  fetch('http://localhost:5500/data')
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').textContent = data.message;
    })
    .catch(error => console.error('Error fetching data:', error));
};

setInterval(fetchData, pollInterval);

// Initial fetch
fetchData();
