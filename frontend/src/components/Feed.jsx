import Tile from "./Tile.jsx";
import { useState, useEffect } from 'react';
import { apiUrl } from '../utils/globals.js';
import { useParams} from "react-router-dom";

const Feed = ({type}) => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    ``
    // Retrieve the authentication token from local storage
    const authToken = localStorage.getItem('authToken');

    let url = apiUrl;

    if (type === "Room") {
      url = url + type + "/site-rooms/" + id;
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

  const renderComponent = () => {
    if (type === "Site") {
      return data.map((site) => (
        <Tile key={site.siteId} data={site} />
      ));
    } else if (type === "Room") {
      return data.map((room) => (
        <Tile key={room.roomId} data={room} />
      ));
    } else {
      return null; // Handle other cases or return nothing
    }
  }
  
  return (
    <div className="siteFeedContainer">
      {data && renderComponent()}
    </div>
  )
}

export default Feed