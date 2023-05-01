import { styled } from "@mui/system";

export const LayoutWrapper = styled("section")({
  display: "grid",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

export const Main = styled("main")({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});
export const OutletWrapper = styled("section")(({ theme }) => ({
  flex: "1 0",
  padding: theme.spacing(2.5),
  width: "100%",
}));
