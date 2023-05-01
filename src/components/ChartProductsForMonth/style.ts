import { styled } from "@mui/system";

export const DataProductsForMonthWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100vh",
  margin: "0 auto",
  [theme.breakpoints.up("xl")]: {
    maxWidth: "30vw",
    maxHeight: "30vh",
  },
}));
