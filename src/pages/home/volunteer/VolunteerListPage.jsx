import VolunteerList from "components/home/volunteer/VolunteerList";
import VolunteerListSearch from "components/home/volunteer/VolunteerListSearch";
import VolunteerListTitle from "components/home/volunteer/VolunteerListTitle";
import "styles/home/volunteer/VolunteerListPage.scss";
const VolunteerListPage = () => {
  return (
    <div className="volunteer-list-page-container">
      <VolunteerListTitle />
      <VolunteerListSearch />
      <VolunteerList />
    </div>
  );
};

export default VolunteerListPage;
