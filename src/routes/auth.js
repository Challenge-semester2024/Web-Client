import CenterInfoPage from "pages/auth/CenterInfoPage";
import LoginPage, {
  action as loginAction,
  loader as loginLoader,
} from "pages/auth/LoginPage";
import RegisterPage, {
  loader as registerLoader,
} from "pages/auth/RegisterPage";

const auth = [
  {
    index: true,
    element: <LoginPage />,
    loader: loginLoader,
    action: loginAction,
  },
  {
    path: "register",
    element: <RegisterPage />,
    loader: registerLoader,
    children: [
      {
        index: true,
        element: <CenterInfoPage />,
      },
      {
        path: "ceoinfo",
        element: <RegisterPage />,
      },
      {
        path: "wait",
        element: <RegisterPage />,
      },
    ],
  },
];

export default auth;
