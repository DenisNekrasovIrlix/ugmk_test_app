import { Main } from "pages/Main";
import { ProductionDetailsForMonth } from "pages/ProductionDetailsForMonth";
import { IRoutes } from "./types";

// Список маршрутов в приложении
export const routes: IRoutes = [
  {
    element: Main,
    path: "/",
  },
  {
    element: ProductionDetailsForMonth,
    path: "/details/:idFactory/:numberMonth",
  },
];
