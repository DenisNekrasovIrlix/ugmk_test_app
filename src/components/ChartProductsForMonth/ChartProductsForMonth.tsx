import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Typography } from "@mui/material";
import { generateListColor } from "utils/global";
import { IDataPie, IProps } from "./types";
import { getOptions } from "./config";
import { DataProductsForMonthWrapper } from "./style";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const ChartProductsForMonth: React.FC<IProps> = function ({ dataSpec }) {
  let data: IDataPie = {} as IDataPie;
  let options = {};
  if (dataSpec) {
    options = getOptions(dataSpec.typeWeight);
    const { totalVolumeProductionForMonth, typeProducts } = dataSpec;
    data = {
      ...data,
      labels: typeProducts,
      datasets: [
        {
          label: "Тонн",
          data: totalVolumeProductionForMonth,
          backgroundColor: generateListColor(typeProducts.length, "0.2"),
          borderColor: generateListColor(typeProducts.length, "1.0"),
        },
      ],
    };
  }
  console.log(dataSpec);
  return (
    <>
      {dataSpec && (
        <DataProductsForMonthWrapper>
          <Typography variant={"h2"} textAlign={"center"}>
            Статистика продукции {dataSpec.titleFactory} за {dataSpec.month}
          </Typography>
          <Pie options={options} data={data} />
        </DataProductsForMonthWrapper>
      )}
    </>
  );
};
