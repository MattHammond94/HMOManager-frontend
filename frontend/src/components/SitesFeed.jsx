import Site from "../components/Site";
import { useState, useEffect } from 'react';
import { apiUrl } from '../utils/globals.js';

const SitesFeed = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Retrieve the authentication token from local storage
    const authToken = localStorage.getItem('authToken');
  
    // Fetch data from backend API with authentication token
    fetch(apiUrl + 'Site', {
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
    .then(data => setSites(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div className="siteFeedContainer">
      {sites && sites.map((site) => (
        <Site key={site.siteId} site={site} />
      ))}
    </div>
  )
}

export default SitesFeed