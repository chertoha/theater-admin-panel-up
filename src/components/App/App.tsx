import router from "config/router";
import React from "react";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
