import React from "react";
import Alert from "@mui/material/Alert";
import { ErrorWrapper } from "./style";
import { IPropsError } from "./types";

// Компонент ошибки
export const Error: React.FC<IPropsError> = ({ text }) => {
  return (
    <ErrorWrapper container>
      <Alert severity={"error"}>{text}</Alert>
    </ErrorWrapper>
  );
};
