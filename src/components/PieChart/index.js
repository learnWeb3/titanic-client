import Chart from "react-apexcharts";
import { useState } from "react";

export const PieChart = ({
  width = "100%",
  series = [44, 55, 41, 17, 15],
  labels = ["A", "B", "C", "D", "E"],
  handlePointSelection=null
}) => {
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
      events: {
        dataPointSelection: function (event, chartContext, config) {
          handlePointSelection && handlePointSelection(labels[config.dataPointIndex])
        },
      },
    },
    labels: labels,
  });
  return (
    <div
      className="donut"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Chart options={options} series={series} type="donut" width={width} />
    </div>
  );
};
