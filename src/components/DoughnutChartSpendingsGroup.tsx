import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js/auto";
import { IUserData } from "../hooks/useGroupsWithAmount";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartSpendingsGroupProps = {
  chartData: IUserData[];
  total: number;
};
export const DoughnutChartSpendingsGroup = ({ chartData, total }: DoughnutChartSpendingsGroupProps) => {
  const data = {
    labels: chartData.map((data: IUserData) => data.group),
    datasets: [
      {
        data: chartData.map((data: IUserData) => data.amount),
        cutout: "70%",
      },
    ],
  };

  const plugins = [
    {
      beforeDraw: function (chart: { ctx: any; chartArea: { top: number; width: number; height: number } }) {
        const text = `${total.toFixed(2)} PLN`;
        const {
          ctx,
          chartArea: { top, width, height },
        } = chart;

        ctx.restore();
        ctx.font = "16px sans-serif";
        // ctx.fillStyle = "white";
        ctx.textBaseline = "top";

        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = (16 + top + height) / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return <Doughnut className="bg-slate-300 rounded p-2" data={data} plugins={plugins} />;
};
