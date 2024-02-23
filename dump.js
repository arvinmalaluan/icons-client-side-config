var dnut_data = {
  labels: ["Label 4", "Label 1", "Label 2", "Label 3", "Label 4"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
      ],
      hoverOffset: 4,
      data: [10, 20, 15, 25, 10],
    },
  ],
};

var dconfig = {
  responsive: true,
  maintainAspectRatio: false,
};

var dnut = document.getElementById("myDoughnut").getContext("2d");

var myDoughnut = new Chart(dnut, {
  type: "doughnut",
  data: dnut_data,
  options: dconfig,
});
