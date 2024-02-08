import { NavLink } from "react-router-dom";

// Components:
import LogOutButton from "../components/LogOutButton";

// Icons:
import { FaRegUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa6";
import { BsBuildingAdd } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";



const Navbar = () => {

  // Store user in global state using useContext
  const user = {
    username: "admin1"
  }

  return (
    // The options in the admin navbar may only be accessible to certain admin types.

    <nav>
      <ul>
        <li>
          <div className="navbarContentContainer navbarHeader">
            <h1>{ user.username }</h1>
            <div className="navIconContainer">
              <FaRegUser className="navIcon" />
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/dashboard/addNewSite">
            <div className="navbarContentContainer">
              <p>Add New Site</p>
              <div className="navIconContainer">
                <BsBuildingAdd className="navIcon" />
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/updatePassword">
            <div className="navbarContentContainer">
              <p>Update Password</p>
              <div className="navIconContainer">
                <FaUserEdit className="navIcon"/>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/addAdmin">
            <div className="navbarContentContainer">
              <p>Add Admin</p>
              <div className="navIconContainer">
                <FaUserPlus className="navIcon" />
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/updateAdmin">
            <div className="navbarContentContainer">
              <p>Update Admin</p>
              <div className="navIconContainer">
                <FaUserCog className="navIcon" />
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/removeAdmin">
            <div className="navbarContentContainer">
              <p>Remove Admin</p>
              <div className="navIconContainer">
                <FaUserMinus className="navIcon" />
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/calendar">
            <div className="navbarContentContainer">
              <p>Calendar</p>
              <div className="navIconContainer">
                <FaUserMinus className="navIcon" />
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <LogOutButton />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar