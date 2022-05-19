import Chart from "react-apexcharts";
import { useState } from "react";

export const BarChart = ({
  width = "100%",
  xAxisCategories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  series = [
    {
      name: "categories",
      data: [
        {
          x: "category A",
          y: 10,
        },
        {
          x: "category B",
          y: 18,
        },
        {
          x: "category C",
          y: 13,
        },
      ],
    },
  ],
}) => {
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: [...xAxisCategories],
    },
  });

  return (
    <div
      className="column"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Chart options={options} series={series} type="bar" width={width} />
    </div>
  );
};
