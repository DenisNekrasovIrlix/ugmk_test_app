import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetDataProductsQuery } from "api/products";
import { IAdapterSpecProduct } from "types/products";
import { ButtonBackPage } from "components/ButtonBackPage";
import { ChartProductsForMonth } from "components/ChartProductsForMonth";
import { Error } from "components/Error";
import { Loader } from "components/Loader";

export const DetailsProductsForMonth = function () {
  const { idFactory, numberMonth } = useParams();
  const isIdFactory = idFactory ? +idFactory : 1;
  const isNumberMonth = numberMonth ? +numberMonth : 1;
  const isErrorGetArgs =
    (isIdFactory !== undefined &&
      (!Number.isInteger(isIdFactory) || isIdFactory < 1)) ||
    (isNumberMonth !== undefined &&
      (!Number.isInteger(isNumberMonth) ||
        isNumberMonth < 1 ||
        isNumberMonth > 12));
  const dataQuery = useGetDataProductsQuery(
    {
      idFactory: isIdFactory,
      numberMonth: isNumberMonth,
      typeWeight: "Тонн",
    },
    {
      skip: isErrorGetArgs,
    }
  );
  const dataSpec = dataQuery.data as IAdapterSpecProduct;
  const isNonDataQuery = dataQuery && !dataQuery.data;
  const isError = dataQuery && dataQuery.isError;
  const isLoading = dataQuery && dataQuery.isLoading;
  return (
    <>
      <Grid padding={1} container justifyContent={"center"}>
        {" "}
        <ButtonBackPage />
      </Grid>
      {isLoading && <Loader />}
      {!isLoading && (isError || isNonDataQuery) && (
        <Error text={"Ошибка запроса данных"} />
      )}
      {!isNonDataQuery && !isError && dataSpec && (
        <ChartProductsForMonth dataSpec={dataSpec} />
      )}
    </>
  );
};
