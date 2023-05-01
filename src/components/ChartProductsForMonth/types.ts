import { IAdapterSpecProduct } from "types/products";

export interface IDataPie {
  labels: Array<string>;
  datasets: Array<{
    label: string;
    data: Array<number>;
    backgroundColor?: Array<string>;
    borderColor?: Array<string>;
  }>;
}
export interface IProps {
  dataSpec: IAdapterSpecProduct;
}
