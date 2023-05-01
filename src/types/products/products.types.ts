interface IFactory {
  [index: string]: {
    id: number | null;
    title: string | null;
    totalVolumeProductsForMonths: Array<number>;
  };
}
export interface IAdapterAllProducts {
  monthList: Array<string>;
  factory: IFactory;
  typeWeight: "Тонн";
}
export interface IAdapterSpecProduct {
  titleFactory: string;
  month: string;
  typeProducts: Array<string>;
  totalVolumeProductionForMonth: Array<number>;
  typeWeight: "Тонн";
}
