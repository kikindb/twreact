import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Middlewares

// Pages
import NotFound from "./../pages/NotFound/NotFound";

import App from "./../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import Info from "../pages/Info/Info";
import Profile from "../pages/Profile/Profile";

export const ROUTES = {
  PUBLIC: {
    LOGIN: "login",
    SIGNIN: "signin",
  },
  PRIVATE: {
    HOME: "/",
    INFO: "info",
    ADMIN: "admin",
    PROFILE: "profile",
  },
};

export default function AppRoutes() {
  return (
    <HashRouter>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path={ROUTES.PRIVATE.HOME} element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path={ROUTES.PRIVATE.INFO} element={<Info />} />
            <Route path={ROUTES.PRIVATE.PROFILE} element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
