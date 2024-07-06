import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/root/RootLayout";
import HomePage from "@/pages/homePage/HomePage";
import ListPage from "@/pages/listPage/ListPage";
import SinglePage from "@/pages/singlePage/SinglePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
    ],
  },
]);

export default router;
