import ErrorPage from "pages/ErrorPage";
import RootLayout from "pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import auth from "routes/auth";
import home from "routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [...auth, ...home],
  },
]);

export default router;
