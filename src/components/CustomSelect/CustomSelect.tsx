import { SelectChangeEvent } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { IProps } from "./types";
import { config } from "./config";

export const CustomSelect: React.FC<IProps> = function ({ state, setState }) {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
    localStorage.setItem("selectTypeProduct", event.target.value as string);
  };
  return (
    <Select
      sx={{ width: 200 }}
      value={state}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      onChange={handleChange}
    >
      <MenuItem selected value={"all"}>
        Все продукты
      </MenuItem>
      {config.map(({ value, text }) => (
        <MenuItem key={value} value={value}>
          {text}
        </MenuItem>
      ))}
    </Select>
  );
};
