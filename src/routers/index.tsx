  import {createBrowserRouter, Navigate } from "react-router-dom";
  import LoadWrapperUtils from "@/function/utils/loadWrapperUtils";
  import { lazy } from "react";

  // import all components use lazy loads method for better performance
  const MainPage = LoadWrapperUtils(lazy(() => import("@/pages/MainPage")));
  const StartButton = LoadWrapperUtils(lazy(() => import("@/layout/app/StartButton")));
  const SignatureX = LoadWrapperUtils(lazy(() => import("@/layout/app/SignatureX")));
  // const AdminPage = LoadWrapperUtils(lazy(() => import("@/pages/AdminPage")));
  const ErrorPage = LoadWrapperUtils(lazy(() => import("@/pages/ErrorPage")));

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children: [
        { index: true, element: <StartButton /> },
        { path: "signature", element: <SignatureX /> },
      ]
    },
    // {
    //   path: "/admin",
    //   element: <AdminPage/>,
    //   // children: [
    //   //   { path: "/create", element: null },
    //   // ]
    // },
    {
      path: "/404",
      element: <ErrorPage /> // page not found
    },
    {
      path: "*",
      element: <Navigate to="/404" replace /> // catch-all route for undefined paths and redirect to /404
    }
  ]);

  export default appRoutes;