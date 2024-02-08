import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { apiUrl } from "../utils/globals.js";

// Components:
import HomeButton from "../components/HomeButton";
import SiteNavBar from "../components/SiteNavBar.jsx";
import SiteOptionsToolbar from "../components/SiteOptionsToolbar.jsx";

const SitePage = () => {
  const { id } = useParams();
  const [site, setSite] = useState({});

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
  
    fetch(apiUrl + `Site/${id}`, {
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
    .then(data => setSite(data))
    .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div>
      <HomeButton layoutType={true}/>
      <SiteNavBar site={ site } />
      <Outlet />
      <SiteOptionsToolbar id={ id }/>
    </div>
  )
}

export default SitePage