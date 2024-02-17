import HomeLayout from "pages/home/HomeLayout";
import HomePage from "pages/home/HomePage";

const home = [
  {
    path: "home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default home;
