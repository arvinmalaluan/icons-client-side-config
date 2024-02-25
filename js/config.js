// Your Chart.js code
// <block:setup:2>
const inputs = {
  min: 0,
  max: 100,
  count: 50,
  decimals: 2,
  continuity: 1,
};

const generateLabels = () => {
  return Array.from({ length: inputs.count }, (_, i) => `Label ${i + 1}`);
};

const generateData = () =>
  Array.from(
    { length: inputs.count },
    () => Math.random() * (inputs.max - inputs.min) + inputs.min
  );
// </block:setup>

// <block:data:0>
const data = {
  labels: generateLabels(),
  datasets: [
    {
      borderWidth: 1,
      label: "Dataset",
      data: generateData(),
      borderColor: "red",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      fill: "start",
      radius: 0,
    },
  ],
};
// </block:data>

// <block:actions:3>
let smooth = false;

const actions = [
  {
    name: "Fill: false (default)",
    handler: (chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.fill = false;
      });
      chart.update();
    },
  },
  {
    name: "Fill: origin",
    handler: (chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.fill = "origin";
      });
      chart.update();
    },
  },
  {
    name: "Fill: start",
    handler: (chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.fill = "start";
      });
      chart.update();
    },
  },
  {
    name: "Fill: end",
    handler: (chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.fill = "end";
      });
      chart.update();
    },
  },
  {
    name: "Randomize",
    handler(chart) {
      chart.data.datasets.forEach((dataset) => {
        dataset.data = generateData();
      });
      chart.update();
    },
  },
  {
    name: "Smooth",
    handler(chart) {
      smooth = !smooth;
      chart.options.elements.line.tension = smooth ? 0.4 : 0;
      chart.update();
    },
  },
];
// </block:actions>

// <block:config:1>
const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    tension: 0.1,
    scales: {
      x: {
        // Display grid lines if desired
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
        },
        // Display labels if desired
        display: false,
        ticks: {
          // Set custom tick options if needed
          // ...
        },
      },
      y: {
        // Begin at zero if desired
        beginAtZero: true,
        ticks: {
          // Customize tick options as needed
          // ...
        },
        // Set custom grid options if desired
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        // Set suggested min and max values based on your data
        min: -20,
        max: 250,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      title: {
        display: false,
        text: (ctx) => "Fill: " + ctx.chart.data.datasets[0].fill,
      },
      legend: {
        display: false,
      },
    },
  },
};

const config1 = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    tension: 0.1,
    maintainAspectRatio: false,

    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        beginAtZero: true,
        max: 150, // set your desired max value
        min: -100, // set your desired min value
        grid: {
          color: "rgba(0, 0, 0, 0.05)", // set grid color
        },
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      title: {
        display: false,
        text: (ctx) => "Fill: " + ctx.chart.data.datasets[0].fill,
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
    },
  },
};
// </block:config>

// Get the canvas element and render the chart
const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);

const ctx1 = document.getElementById("myChart1").getContext("2d");
new Chart(ctx1, config1);

var bard = {
  labels: [
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
  ],
  datasets: [
    {
      label: "Sample Bar Chart",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      data: [
        10, 20, 15, 25, 10, 20, 15, 25, 10, 20, 15, 25, 10, 20, 15, 25, 10, 20,
        15, 25, 10, 20, 15, 25,
      ],
    },
  ],
};

// Configuration options
var options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
      beginAtZero: true,
      max: 35, // set your desired max value
      min: 0,
      grid: {
        color: "rgba(0, 0, 0, 0.05)", // set grid color
      },
    },
  },
  plugins: {
    filler: {
      propagate: false,
    },
    title: {
      display: false,
      text: (ctx) => "Fill: " + ctx.chart.data.datasets[0].fill,
    },
    legend: {
      display: false,
    },
  },
};

// Get the canvas element
var bar = document.getElementById("myBarChart").getContext("2d");

// Create a bar chart
var myBarChart = new Chart(bar, {
  type: "bar",
  data: bard,
  options: options,
});

var bard2 = {
  labels: [
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
  ],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      data: [
        10, 20, 15, 25, 10, 20, 15, 25, 10, 20, 15, 25, 10, 20, 15, 25, 10, 20,
        15, 25, 10, 20, 15, 25,
      ],
    },
    {
      label: "Dataset 2",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      data: [
        15, 25, 20, 30, 15, 25, 20, 30, 15, 25, 20, 30, 15, 25, 20, 30, 15, 25,
        20, 30, 15, 25, 20, 30,
      ],
    },
  ],
};

var options2 = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        display: false, //this will remove only the label
      },
    },
    y: {
      display: false,
      beginAtZero: true,
      max: 70,
      min: 0,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: {
    filler: {
      propagate: false,
    },
    title: {
      display: false,
      text: (ctx) => "Fill: " + ctx.chart.data.datasets[0].fill,
    },
    legend: {
      display: false,
    },
  },
};

var bar2 = document.getElementById("myBarChart2").getContext("2d");

var myBarChart2 = new Chart(bar2, {
  type: "bar",
  data: bard2,
  options: options2,
});

var dnut_data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: [
        "rgb(251, 168, 52)",
        "rgb(12, 53, 158)",
        "rgb(21, 245, 186)",
        "rgb( 252, 103, 54)",
        "rgb(236, 244, 214)",
      ],
      hoverOffset: 4,
      data: [10, 20, 15, 25, 10],
    },
  ],
};

var dconfig = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
  },
};

var dnut = document.getElementById("myDoughnut").getContext("2d");

var myDoughnut = new Chart(dnut, {
  type: "doughnut",
  data: dnut_data,
  options: dconfig,
});
