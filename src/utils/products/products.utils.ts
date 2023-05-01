import { IListProducts } from "models/products";
import { IAdapterAllProducts, IAdapterSpecProduct } from "types/products";
import { getMonths } from "utils/global";

// Адаптер модели данных с API /products
// под Bar Chart
export function adapterDataProductsForChartsBar(
  result: IListProducts,
  typeWeight: "Тонн",
  isProduct: string
) {
  const dataProducts: IAdapterAllProducts = {
    monthList: getMonths(3) as unknown as Array<string>,
    factory: {},
    typeWeight,
  };

  result.forEach((product, i) => {
    const isFactory = !dataProducts.factory[`${product.factory_id}`];
    if (isFactory) {
      const newFactory = {
        totalVolumeProductsForMonths: Array(dataProducts.monthList.length).fill(
          0
        ),
        title: `Фабрика ${product.factory_id}`,
        id: product.factory_id,
      };
      dataProducts.factory[`${product.factory_id}`] = newFactory;
    }

    if (product.date) {
      const indexMonth = +product.date.split("/")[1] - 1;
      let idProduct = 1;
      let totalVolumeProductsForDay = 0;
      const specDataProduct = Object.entries(product);
      specDataProduct.forEach(([key, prop]) => {
        const isProductAll =
          isProduct === "all" && key === `product${idProduct}`;
        if (isProductAll) {
          totalVolumeProductsForDay += prop;
          ++idProduct;
        }
        const isProductNonAll = isProduct !== "all" && key === isProduct;
        if (isProductNonAll) totalVolumeProductsForDay += prop;
      });
      if (!isFactory) {
        const arrayMonth =
          dataProducts.factory[`${product.factory_id}`]
            .totalVolumeProductsForMonths;
        arrayMonth[indexMonth] =
          arrayMonth[indexMonth] + totalVolumeProductsForDay / 1000;
      }
    }
  });
  return dataProducts;
}

// Адаптер модели данных с API /products
// под Pie Chart
export function adapterDataProductsForChartsPie(
  result: IListProducts,
  idFactory: number,
  numberMonth: number,
  typeWeight: "Тонн"
) {
  const dataProducts: IAdapterSpecProduct = {
    titleFactory: `Фабрики ${idFactory}`,
    month: getMonths(3, numberMonth) as unknown as string,
    typeProducts: [] as string[],
    totalVolumeProductionForMonth: [] as number[],
    typeWeight: typeWeight,
  };
  result.forEach((product, i) => {
    if (product.date && product.factory_id) {
      const numberMonthProduction = +product.date.split("/")[1];

      if (
        numberMonth === numberMonthProduction &&
        product.factory_id === idFactory
      ) {
        const listProducts: Array<[string, number]> = Object.entries(
          product
        ).filter(([key, prop]) => {
          if (key.includes("product")) return [key, prop];
        });
        if (dataProducts.typeProducts.length === 0) {
          const keyProduct = listProducts.map(([key, prop]) => {
            const idProduct = key.replace("product", "");
            return `Продукт ${idProduct}`;
          });
          dataProducts.typeProducts = keyProduct as Array<string>;
          dataProducts.totalVolumeProductionForMonth = Array(
            dataProducts.typeProducts.length
          ).fill(0);
        }
        listProducts.forEach(([key, prop]) => {
          const indexVolumeProduct = +key.replace("product", "") - 1;
          const listVolumeProduct = dataProducts.totalVolumeProductionForMonth;
          listVolumeProduct[indexVolumeProduct] =
            listVolumeProduct[indexVolumeProduct] + prop / 1000;
        });
      }
    }
  });
  const trimListVolumeProduct = dataProducts.totalVolumeProductionForMonth.map(
    (volume) => +volume.toFixed(2)
  );
  dataProducts.totalVolumeProductionForMonth = trimListVolumeProduct;
  return dataProducts;
}
