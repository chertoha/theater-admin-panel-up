import { lazy } from "react";
import AuthProvider from "components/AuthProvider";
import { Navigate, createBrowserRouter } from "react-router-dom";
import SharedLayout from "components/SharedLayout";

const PublicationsPage = lazy(() => import("../pages/PublicationsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const UsersPage = lazy(() => import("../pages/UsersPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const SubscribersPage = lazy(() => import("../pages/SubscribersPage"));

export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",

  PUBLICATIONS: "publications",
  USERS: "users",
  ABOUT: "about",
  SUBSCRIBERS: "subscribers",
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
        path: ROUTES.USERS,
        element: <UsersPage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.SUBSCRIBERS,
        element: <SubscribersPage />,
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
