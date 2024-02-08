import { NavLink } from "react-router-dom";

//Icons:
import { BsBuildingExclamation } from "react-icons/bs";
import { BsBuildingAdd } from "react-icons/bs";
import { BsBuildingGear } from "react-icons/bs";
import { TbBuildingPavilion } from "react-icons/tb";

const SiteOptionsToolbar = ({ id }) => {
  return (
    <div className="siteOptionsToolbar">
      <NavLink to={`/site/${id}/deleteSite`}>
        <BsBuildingExclamation className="siteIcon"/>
        <h2 className="siteOptionTitle">Delete Site</h2>
      </NavLink>
      <NavLink to={`/site/${id}/addRoomToSite`}>
        <BsBuildingAdd className="siteIcon"/>
        <h2 className="siteOptionTitle">Add A Room</h2>
      </NavLink>
      <NavLink to={`/site/${id}/updateSite`}>
        <BsBuildingGear className="siteIcon"/>
        <h2 className="siteOptionTitle">Update Site Details</h2>
      </NavLink>
      <NavLink to={`/site/${id}/allRooms`}>
        <TbBuildingPavilion className="siteIcon"/>
        <h2 className="siteOptionTitle">View All Rooms</h2>
      </NavLink>
    </div>
  )
}

export default SiteOptionsToolbar