import React from "react";
import Chart, { Tooltip } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Gauge = (props) => {
  const exp = props.exp;
  const data = {
    labels: ["획득 경험치", "남은 경험치"],
    datasets: [
      {
        data: [exp, 10000 - exp],
        backgroundColor: ["#E65D1D", "#FFF8EF"],
        borderRadius: 10,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      cutout: "90%",
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  return (
    <div className="w-[186px] h-[186px]">
      <Doughnut data={data} options={config.options}></Doughnut>
    </div>
  );
};

export default Gauge;
