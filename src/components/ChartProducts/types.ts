import { IAdapterAllProducts } from "types/products";

export interface IProps {
  data: IAdapterAllProducts;
}
interface IItemDataSets {
  label: string;
  data: Array<number>;
  backgroundColor: string;
}
export type IDataSets = Array<IItemDataSets>;
