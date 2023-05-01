import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "config/appRouter";
import { Layout } from "components/Layout";

// Роутер приложения
const AppRouter = function () {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
        <Route path={"*"} element={<Navigate replace to={"/"} />} />
      </Route>
    </Routes>
  );
};
export { AppRouter };
