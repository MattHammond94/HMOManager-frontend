import OpenModalButton from "./OpenModalButton";
import DeleteSiteButton from "./DeleteSiteButton";

//Icons:
import { BsBuildingExclamation } from "react-icons/bs";
// import { BsBuildingAdd } from "react-icons/bs";
import { BsBuildingGear } from "react-icons/bs";
// import { TbBuildingPavilion } from "react-icons/tb";

const PillBar = ({ setEditMode }) => {
  return (
    <div className="siteOptionsPillbar">
        <OpenModalButton 
          buttonContent={
            <div>
              <BsBuildingExclamation className="pillIcon"/>
              <p className="pillTitle">Delete Site</p>
            </div>
          }

          modalContent={
            <DeleteSiteButton />
          }
        />

        <button onClick={ () => setEditMode(prevEditMode => !prevEditMode) }>
          <BsBuildingGear className="siteIcon"/>
          <p className="siteOptionTitle">Update Site Details</p>
        </button>
    

        {/* <BsBuildingAdd className="siteIcon"/>
        <h2 className="siteOptionTitle">Add A Room</h2>
    



        <TbBuildingPavilion className="siteIcon"/>
        <h2 className="siteOptionTitle">View All Rooms</h2> */}
    </div>
  )
}

export default PillBar;