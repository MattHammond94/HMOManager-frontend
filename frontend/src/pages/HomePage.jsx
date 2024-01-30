import LogInForm from "../components/LogInForm"
// import { PiCastleTurret } from "react-icons/pi";
// import { FaRegBuilding } from "react-icons/fa";
import { FaBuildingWheat } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="homepageContainer container">
      <h1 data-testid="homepageTitle">HMO Manager</h1>
      <LogInForm />
      <div className="iconContainer">
        {/* <PiCastleTurret className="icon"/> */}
        {/* <FaRegBuilding className="icon"/> */}
        <FaBuildingWheat data-testid="buildingIcon" className="icon" />
      </div>
    </div>
  )
}

export default HomePage