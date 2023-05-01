import React from "react";
import { CircularProgress } from "@mui/material";
import { LoaderWrapper } from "./style";

export const Loader = () => {
  return (
    <LoaderWrapper container>
      <CircularProgress />
    </LoaderWrapper>
  );
};
