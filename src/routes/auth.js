import LoginPage, {
  action as loginAction,
  loader as loginLoader,
} from "pages/auth/LoginPage";

const auth = [
  {
    index: true,
    element: <LoginPage />,
    loader: loginLoader,
    action: loginAction,
  },
  {
    path: "register",
  },
];

export default auth;
