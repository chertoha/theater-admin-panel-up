// import { lazy } from "react";
import AuthProvider from "components/AuthProvider";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

// const HomePage = lazy(() => import("./pages/HomePage"));

export const ROUTES = {
  ROOT: "/",
  PUBLICATIONS: "publications",
  LOGIN: "login",
};

const routes = [
  {
    path: ROUTES.LOGIN,
    element: <div>Login</div>,
  },
  {
    path: ROUTES.ROOT,
    element: (
      <AuthProvider>
        <div>
          Shared Layout <Outlet />
        </div>
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
        element: <div>Publications</div>,
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
