import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
export const LinkWrapper = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));
export const TextLogo = styled(Typography)({
  fontWeight: "bold",
  textAlign: "center",
});
