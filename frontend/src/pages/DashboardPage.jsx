// Components:
import SitesFeed from "../components/SitesFeed";
import LogOutButton from "../components/LogOutButton";

const DashboardPage = () => {
  return (
    <div className="container">
      <h1>HMO Manager Dashboard</h1>
      <h2>Current Sites:</h2>
      <SitesFeed />
      <LogOutButton />
    </div>
  )
}

export default DashboardPage