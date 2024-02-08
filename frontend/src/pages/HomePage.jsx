import LogInForm from "../components/LogInForm"
import { FaBuildingWheat } from "react-icons/fa6";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken") !== null) {
      navigate('/dashboard')
    }
  }, [navigate])

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