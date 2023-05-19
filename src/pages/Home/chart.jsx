import ApexCharts from "react-apexcharts";

export default function Chart() {
  var options = {
    chart: {
      type: "line",
    },
  };

  var series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return <ApexCharts options={options} series={series} />;
}
