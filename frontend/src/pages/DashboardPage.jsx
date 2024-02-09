// Components:
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboardHeader">
        <h1>HMO Manager Dashboard</h1>
        <h2>Current Sites:</h2>
      </div>
      <Feed type="Site" />
    </>
  )
}

export default DashboardPage