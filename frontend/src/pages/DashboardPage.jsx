import { useState } from "react";

// Components:
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import PillBar from "../components/PillBar";

const DashboardPage = () => {
  const [editMode, setEditMode] = useState(false);

  console.log(editMode)

  return (
    <>
      <Navbar />
      {/* <div className="dashboardHeader">
        <h1>HMO Manager Dashboard</h1>
      </div> */}
        <h2>Current Sites:</h2>
      <PillBar setEditMode={setEditMode} />
      <Feed type="Site" editMode={ editMode } setEditMode={ setEditMode }/>

    </>
  )
}

export default DashboardPage