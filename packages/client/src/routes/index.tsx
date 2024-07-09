import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/root/RootLayout";
import HomePage from "@/pages/homePage/HomePage";
import ListPage from "@/pages/listPage/ListPage";
import SinglePage from "@/pages/singlePage/SinglePage";
import ProfilePage from "@/pages/profilePage/ProfilePage";

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
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
