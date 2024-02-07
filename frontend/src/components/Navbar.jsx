import { NavLink } from "react-router-dom";

// Components:
import LogOutButton from "../components/LogOutButton";

// Icons:
import { FaRegUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";


const Navbar = () => {

  // Store user in global state using useContext
  const user = {
    username: "admin1"
  }

  return (
    // The options in the admin navbar may only be accessible to certain admin types.

    <nav>
      <div className="navbarContentContainer navbarHeader">
        <h1>{ user.username }</h1>
        <div className="navIconContainer">
          <FaRegUser className="navIcon" />
        </div>
      </div>

      <NavLink to="/dashboard">
        <div className="navbarContentContainer">
          <p>Home</p>
          <div className="navIconContainer">
            <IoIosHome className="navIcon" />
          </div>
        </div>
      </NavLink>

      <NavLink to="/adminPage">
        <div className="navbarContentContainer">
          <p>Update Password</p>
          <div className="navIconContainer">
            <FaUserEdit className="navIcon"/>
          </div>
        </div>
      </NavLink>

      <NavLink to="/adminPage">
        <div className="navbarContentContainer">
          <p>Add Admin</p>
          <div className="navIconContainer">
            <FaUserPlus className="navIcon" />
          </div>
        </div>
      </NavLink>

      <NavLink to="/adminPage">
        <div className="navbarContentContainer">
          <p>Update Admin</p>
          <div className="navIconContainer">
            <FaUserCog className="navIcon" />
          </div>
        </div>
      </NavLink>

      <NavLink to="/adminPage">
        <div className="navbarContentContainer">
          <p>Remove Admin</p>
          <div className="navIconContainer">
            <FaUserMinus className="navIcon" />
          </div>
        </div>
      </NavLink>

      <LogOutButton />
    </nav>
  )
}

export default Navbar