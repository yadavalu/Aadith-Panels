const ctx = document.getElementById('no_panels');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Berlin', 'Chennai', 'Johannesburg'],
      datasets: [{
        label: 'Number of panels',
        data: [44, 14, 3],
        borderWidth: 1
      }]
    },
    /*
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }*/
  });