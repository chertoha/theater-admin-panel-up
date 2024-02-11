import { lazy } from "react";
import AuthProvider from "components/AuthProvider";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import SharedLayout from "components/SharedLayout";

const PublicationsPage = lazy(() => import("../pages/PublicationsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

export const ROUTES = {
  ROOT: "/",
  PUBLICATIONS: "publications",
  LOGIN: "/login",
};

const routes = [
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.ROOT,
    element: (
      <AuthProvider>
        <SharedLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.PUBLICATIONS} />,
      },
      //   {
      //     path: ROUTES.LOGIN,
      //     element: <div>Login</div>,
      //   },
      {
        path: ROUTES.PUBLICATIONS,
        element: <PublicationsPage />,
      },
      {
        path: "*",
        element: <div>Redirect component</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/theater-admin-panel-up",
});

export default router;
