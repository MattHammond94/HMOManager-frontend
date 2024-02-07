import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const HomeButton = () => {
  return (
    <div className="homeBtnContainer">
      <Link to="/dashboard">
        <IoIosHome className="homeIcon"/>
      </Link>
    </div>
  )
}

export default HomeButton