import React from "react";
import Typography from "@mui/material/Typography";
import { FooterWrapper } from "./style";
import { Logo } from "components/Logo";

export const Footer = function () {
  return (
    <FooterWrapper>
      <Logo />
      <Typography textAlign={"center"}>Тестовое приложение</Typography>
    </FooterWrapper>
  );
};
