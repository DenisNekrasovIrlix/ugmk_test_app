import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api, host } from "config/api";
import { IListProducts } from "models/products";
import { IAdapterAllProducts, IAdapterSpecProduct } from "types/products";
import {
  adapterDataProductsForChartsBar,
  adapterDataProductsForChartsPie,
} from "utils/products";
import { IParamsGetDataProducts } from "./types";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: host }),
  endpoints: (build) => ({
    getDataProducts: build.query<
      IListProducts | IAdapterAllProducts | IAdapterSpecProduct,
      IParamsGetDataProducts
    >({
      query: () => {
        return {
          url: api.routes.dataProducts,
          method: "GET",
        };
      },
      transformResponse: (result: IListProducts, meta, args) => {
        // Возвращает адаптированную модель данных всех продуктов
        const isAllProducts =
          args.isSelectProduct &&
          args.isSelectProduct === "all" &&
          args.typeWeight;
        if (isAllProducts) {
          return adapterDataProductsForChartsBar(
            result,
            args.typeWeight,
            args.isSelectProduct as string
          );
        }
        // Возвращает адаптированную модель данных конкретного продукта
        const isSpecProduct =
          args.isSelectProduct &&
          args.isSelectProduct !== "all" &&
          args.isSelectProduct.includes("product") &&
          args.typeWeight;
        if (isSpecProduct) {
          return adapterDataProductsForChartsBar(
            result,
            args.typeWeight,
            args.isSelectProduct as string
          );
        }
        // Возвращает адаптированную модель данных для конкретного месяца
        const isDataProductsForMonth =
          args.numberMonth && args.idFactory && args.typeWeight;
        if (isDataProductsForMonth) {
          return adapterDataProductsForChartsPie(
            result,
            args.idFactory as number,
            args.numberMonth as number,
            args.typeWeight
          );
        }
        return result;
      },
    }),
  }),
});
export const { useGetDataProductsQuery } = productsAPI;
