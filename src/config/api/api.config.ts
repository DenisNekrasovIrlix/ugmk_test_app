import { IAPIConfig } from "./types";

export const host = "http://localhost:3001";
// API маршруты приложения
export const api: IAPIConfig = {
  routes: {
    dataProducts: "/products",
  },
};
