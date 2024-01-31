// Components:
import SitesFeed from "../components/SitesFeed";
import LogOutButton from "../components/LogOutButton";

import Loader from "../components/Loader";

//Icons:
import { ImMenu } from "react-icons/im";

const DashboardPage = () => {
  return (
    <div className="container">
      <h1>This is the dashboard</h1>
      <div className="menuIconContainer">
        <ImMenu className="icon menu"/>
      </div>
      <SitesFeed />
      <LogOutButton />
      <Loader />
    </div>
  )
}

export default DashboardPage