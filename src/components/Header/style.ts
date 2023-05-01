import { styled } from "@mui/system";
import { Grid } from "@mui/material";
export const HeaderWrapper = styled("header")(({ theme }) => ({
  padding: theme.spacing(2.5),
  backgroundColor: theme.palette.background.main,
}));
export const HeaderContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2.5),
  backgroundColor: theme.palette.background.main,
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    gap: theme.spacing(2.5),
  },
}));
