import React from "react";
import { LinkWrapper, TextLogo } from "./style";
import { listLogoText } from "./constants";

export const Logo = () => {
  return (
    <LinkWrapper to={"/"}>
      {listLogoText.map((text) => (
        <TextLogo key={text} variant={"h1"} color={"divider"}>
          {text}
        </TextLogo>
      ))}
    </LinkWrapper>
  );
};
