import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { IAdapterAllProducts } from "types/products";
import { IDataSets, IProps } from "./types";
import { getOptions } from "./config";
import { generateColor } from "utils/global";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartProducts: React.FC<IProps> = function ({ data }) {
  // Переход на страницу с конкретным месяцем
  const navigate = useNavigate();
  const chartRef = React.useRef();
  const onClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (chartRef.current) {
      const elemBar = getElementAtEvent(chartRef.current, event);
      if (elemBar[0]?.element) {
        const {
          0: { datasetIndex: idFactory, index: numberMonth },
        } = getElementAtEvent(chartRef.current, event);
        navigate(`/details/${idFactory + 1}/${numberMonth + 1}`);
      }
    }
  };
  //   Конфигурация графика
  let labels = [] as Array<string>;
  let datasets = [] as IDataSets;
  let options = {};
  if (data) {
    options = getOptions((data as IAdapterAllProducts).typeWeight);
    labels = [...labels, ...(data as IAdapterAllProducts).monthList];
    datasets = [
      ...Object.entries((data as IAdapterAllProducts).factory).map(
        ([key, { id, title, totalVolumeProductsForMonths }]) => ({
          label: title,
          data: totalVolumeProductsForMonths,
          backgroundColor: generateColor("0.5"),
        })
      ),
    ] as unknown as IDataSets;
  }
  const dataChart = {
    labels,
    datasets,
  };
  return (
    <>
      <Bar
        onClick={onClick}
        ref={chartRef}
        options={options}
        data={dataChart}
      />
    </>
  );
};
