import { useGetDataProductsQuery } from "api/products";
import React from "react";
import { IAdapterAllProducts } from "types/products";
import { ChartProducts } from "components/ChartProducts";
import { Error } from "components/Error";
import { Loader } from "components/Loader";
import { CustomSelect } from "components/CustomSelect";
import { DataProductsWrapper, SelectWrapper } from "./style";
import { Typography } from "@mui/material";

export const DetailsProducts = function () {
  const selectTypeProduct = localStorage.getItem("selectTypeProduct");
  const [selectProduct, setSelectProduct] = React.useState(
    selectTypeProduct || "all"
  );
  const { data, isError, isLoading } = useGetDataProductsQuery({
    isSelectProduct: selectProduct,
    typeWeight: "Тонн",
  });

  return (
    <>
      {isError && !data && <Error text="Ошибка запроса" />}
      {isLoading && <Loader />}
      {data && !isError && (
        <DataProductsWrapper>
          <SelectWrapper container>
            <Typography textAlign={"center"} variant={"h2"}>
              Фильтр по типу продукции
            </Typography>
            <CustomSelect state={selectProduct} setState={setSelectProduct} />
          </SelectWrapper>
          <ChartProducts data={data as IAdapterAllProducts} />
        </DataProductsWrapper>
      )}
    </>
  );
};
