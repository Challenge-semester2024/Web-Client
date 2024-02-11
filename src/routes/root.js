import ErrorPage from "pages/ErrorPage";
import RootLayout from "pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import auth from "routes/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [...auth],
  },
]);

export default router;
