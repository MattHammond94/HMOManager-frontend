// Components:
import SitesFeed from "../components/SitesFeed";

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
    </div>
  )
}

export default DashboardPage