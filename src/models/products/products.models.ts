export interface IItemListProducts {
  id: number;
  factory_id: number;
  date: string | null;
  product1: number | null;
  product2: number | null;
  product3: number | null;
}

export type IListProducts = Array<IItemListProducts>;
