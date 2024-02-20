import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { apiUrl } from "../utils/globals.js";

// Components:
import HomeButton from "../components/HomeButton.jsx";
import HeaderNavBar from "../components/HeaderNavBar.jsx";
import SiteOptionsToolbar from "../components/SiteOptionsToolbar.jsx";
import PillBar from "../components/PillBar";
import Navbar from "../components/Navbar";
import Tile from "../components/Tile.jsx";

const EntityPage = ({type}) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Retrieve the authentication token from local storage
    const authToken = localStorage.getItem('authToken');

    let url = apiUrl;

    if (type === "Room") {
      url = url + type + "/site-rooms/" + id;
    } else if (type === "Tenant") {
      url = url + type + "/room-tenants/" + id;
    } else {
      url = url + type;
    }

    // Fetch data from backend API with authentication token
    fetch(url, {
      headers: {
        'Authorization': `Bearer ${authToken}`, // Include the token in the Authorization header
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {console.log(data)}
      <HomeButton layoutType={true}/>
      <HeaderNavBar data={ data } /> 
      <div className="entityPageBody">
        <Outlet />
        {/* <SiteOptionsToolbar id={ id }/> */}
        <Navbar />
        <PillBar setEditMode={setEditMode} />
        <div className="siteFeedContainer">
          {data && (
            data.map((entity, index) => (
              <div>
                <Tile key={index} data={entity} editMode={editMode} setEditMode={setEditMode}/>
              </div>
  
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default EntityPage