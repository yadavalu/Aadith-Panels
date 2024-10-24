const no_of_panels = document.getElementById('no_panels');

  new Chart(no_of_panels, {
    type: 'doughnut',
    data: {
      labels: ['Berlin', 'Chennai', 'Johannesburg'],
      datasets: [{
        label: 'Number of panels',
        data: [44, 14, 3],
        borderWidth: 1
      }]
    },
  });

const power_output = document.getElementById('power_output');

  new Chart(power_output, {
    type: 'bar',
    data: {
      labels: ['Berlin', 'Chennai', 'Johannesburg'],
      datasets: [{
        label: 'Approx Maximum Power Output [Watts]',
        data: [18000, 5800, 1250],
        borderWidth: 1
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