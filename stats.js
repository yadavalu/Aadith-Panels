const no_of_panels = document.getElementById('no_panels');

  new Chart(no_of_panels, {
    type: 'doughnut',
    data: {
      labels: ['Berlin', 'Chennai'],
      datasets: [{
        label: 'Number of panels',
        data: [44, 14],
        borderWidth: 1,
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            //'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            //'rgba(75, 192, 192, 1)',
        ],
      }]
    },
  });

const power_output = document.getElementById('power_output');

  new Chart(power_output, {
    type: 'bar',
    data: {
      labels: ['Berlin', 'Chennai'],
      datasets: [{
        label: 'Approx Maximum Power Output [Watts]',
        data: [18000, 5800],
        borderWidth: 1,
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            //'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            // 'rgba(75, 192, 192, 1)',
        ],
      }]
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });