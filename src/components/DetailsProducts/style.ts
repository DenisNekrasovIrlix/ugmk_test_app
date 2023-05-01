import { styled } from "@mui/system";
import { Grid } from "@mui/material";
export const SelectWrapper = styled(Grid)({
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
});
export const DataProductsWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: "90vw",
  maxHeight: "50vh",
  margin: "0 auto",
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1920px",
  },
}));
