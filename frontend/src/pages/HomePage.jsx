import LogInForm from "../components/LogInForm"
import { FaBuildingWheat } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="homepageContainer container">
      <h1 data-testid="homepageTitle">HMO Manager</h1>
      <LogInForm />
      <div className="iconContainer">
        <FaBuildingWheat data-testid="buildingIcon" className="icon" />
      </div>
    </div>
  )
}

export default HomePage