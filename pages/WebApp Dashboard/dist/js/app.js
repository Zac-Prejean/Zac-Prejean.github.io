

const alertBanner = document.getElementById("alert");

const trafficChart = document.getElementById("traffic_chart");
const dailyChart = document.getElementById('daily_chart');
const mobileChart = document.getElementById("mobile_chart");

const send = document.getElementById("send");
const search = document.getElementById("userSearch");
const message = document.getElementById("messageField");


//  ALERT 

alertBanner.innerHTML = 
`<div class="alert_banner">
    <p><b>Alert:</b> You have unread messages!</p>
    <p class="alert_banner_X">X</p>
</div>`

alertBanner.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("alert_banner_X")) {
      alertBanner.style.display = "none";
    }
  });


// TRAFFIC

let trafficLabels = [
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
];

    let trafficData = {
    labels: trafficLabels,
    datasets: [{

      lineTension: 0.2,
      
      backgroundColor: 'rgb(24, 19, 106, 0.3)',
      fill: true,
      fillopacity: 0,
      borderColor: 'rgb(24, 19, 106, 0.3)',
      data: [75, 125, 200, 150, 180, 125, 150, 190, 230, 200, 250, 125, 100],

      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,

    }]
  };

  const trafficConfig = {
    responsive: true,
    plugins: {
        legend: {
          display: false,
        },
      },
    };

  let traffic = new Chart(trafficChart, {
    type: 'line',
    data: trafficData,
    options: trafficConfig,
});

// DAILY

  const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#18136A',
      },
    ],
  };
  
  const dailyConfig = {
    aspectRatio: 1.9,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  let daily = new Chart(dailyChart, {
    type: 'bar',
    data: dailyData,
    options: dailyConfig,
  });

  // Mobile



  const mobileData = {
    labels: [
      'Desktop',
      'Tablet',
      'Phones'
    ],
    datasets: [{
      label: 'Mobile Dataset',
      data: [340, 80, 80],
      backgroundColor: [
        '#18136A',
        '#83e78d',
        '#77749F'
      ],
      hoverOffset: 4
    }]
  };

  const mobileConfig = {
    aspectRatio: 1.9,
    plugins: {
      legend: {
        position: 'right',
        maintainAspectRatio: false,
      },
    },
  };

   let mobile = new Chart(mobileChart, {
    type: 'doughnut',
    data: mobileData,
    options: mobileConfig,
  });


//  MESSAGE

send.addEventListener("click", () => {
    if (search.value === "" && message.value === "") {
      alert("Please fill out user and message fields");
    } else if (search.value === "") {
      alert("Please fill out user field");
    } else if (message.value === "") {
      alert("Please fill out message field");
    } else {
      alert("Message was successfully sent");
    }
  });