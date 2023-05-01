import React from "react";
import { LayoutWrapper, Main, OutletWrapper } from "components/Layout/style";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
export const Layout = () => {
  return (
    <LayoutWrapper>
      <Main>
        <Header />
        <OutletWrapper
          sx={{
            overflowY: "overlay",
          }}
        >
          <Outlet />
        </OutletWrapper>
        <Footer />
      </Main>
    </LayoutWrapper>
  );
};
