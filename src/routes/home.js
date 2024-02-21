import HomeLayout from "pages/home/HomeLayout";
import HomePage from "pages/home/HomePage";
import FacilityPage from "pages/home/facility/FacilityPage";
import GreetingPage from "pages/home/facility/GreetingPage";
import IntroductionPage from "pages/home/facility/IntroductionPage";
import RouteInfoPage from "pages/home/facility/RouteInfoPage";

const home = [
  {
    path: "home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "facility",
        element: <FacilityPage />,
        children: [
          {
            path: "greeting",
            element: <GreetingPage />,
          },
          {
            path: "introduction",
            element: <IntroductionPage />,
          },
          {
            path: "route-info",
            element: <RouteInfoPage />,
          },
        ],
      },
    ],
  },
];

export default home;
