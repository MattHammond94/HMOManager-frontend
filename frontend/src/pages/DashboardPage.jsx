// Components:
import SitesFeed from "../components/SitesFeed";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboardHeader">
        <h1>HMO Manager Dashboard</h1>
        <h2>Current Sites:</h2>
      </div>
      <SitesFeed />
    </>
  )
}

export default DashboardPage