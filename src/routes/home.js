import VolunteerDetailInfo from "components/home/volunteer/VolunteerDetailInfo";
import VolunteerInfo from "components/home/volunteer/VolunteerInfo";
import HomeLayout from "pages/home/HomeLayout";
import HomePage from "pages/home/HomePage";
import FacilityPage from "pages/home/facility/FacilityPage";
import GreetingPage from "pages/home/facility/GreetingPage";
import IntroductionPage from "pages/home/facility/IntroductionPage";
import RouteInfoPage from "pages/home/facility/RouteInfoPage";
import VolunteerLayout from "pages/home/volunteer/VolunteerLayout";
import VolunteerListPage from "pages/home/volunteer/VolunteerListPage";
import VolunteerUploadPage from "pages/home/volunteer/VolunteerUploadPage";

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
      {
        path: "volunteer",
        element: <VolunteerLayout />,
        children: [
          {
            path: "list",
            element: <VolunteerListPage />,
          },
          {
            path: "upload",
            element: <VolunteerUploadPage />,
            children: [
              {
                index: true,
                element: <VolunteerInfo />,
              },
              {
                path: "detail",
                element: <VolunteerDetailInfo />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default home;
