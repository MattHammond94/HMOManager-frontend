import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from '../utils/globals.js';

const RoomsFeed = () => {
  const { id } = useParams();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
  
    fetch(apiUrl + 'Room/site-rooms/' + id, {
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
    .then(data => setRooms(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='roomsFeedContainer'>
      {rooms.map((room) => (
        <div key={room.roomId}>
          {room.name}
        </div>
      ))}
    </div>
  )
}

export default RoomsFeed