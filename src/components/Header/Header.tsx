import React from "react";
import { HeaderContent, HeaderWrapper } from "./style";
import { Logo } from "components/Logo";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent container>
        <Logo />
      </HeaderContent>
    </HeaderWrapper>
  );
};
