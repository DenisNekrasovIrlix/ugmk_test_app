import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const ButtonBackPage = function () {
  const navigate = useNavigate();
  const handleBackPage = () => navigate(-1);

  return (
    <>
      <Button variant={"contained"} onClick={handleBackPage}>
        Вернуться
      </Button>
    </>
  );
};
