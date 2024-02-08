import React, { useState, useEffect } from 'react';
import CalendarDays from './CalendarDays';
import { apiUrl } from '../utils/globals.js';

const Calendar = () => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];

  const [currentDay, setCurrentDay] = useState(new Date());
  const [occupiedRooms, setOccupiedRooms] = useState([]);

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  }

  useEffect(() => {
    fetchOccupiedRooms();
  }, []);

  

  const fetchOccupiedRooms = async () => {
    const authToken = localStorage.getItem('authToken');
    
    try {
      const response = await fetch(apiUrl + 'room/occupied', {
        headers: {
          'Authorization': `Bearer ${authToken}`, // Include the token in the Authorization header
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setOccupiedRooms(data);
    } catch (error) {
      console.error('Error fetching occupied rooms:', error);
    }
  };

  return (
    <div className="container">
      <div className="calendar">
        <div className="calendar-header">
        <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              weekdays.map((weekday, index) => {
                return <div key={index} className="weekdays"><p>{weekday}</p></div>
              })
            }
          </div>
          {currentDay && <CalendarDays day={currentDay} occupiedRooms={occupiedRooms} changeCurrentDay={changeCurrentDay} />}
        </div>
      </div>
    </div>
  );
};

export default Calendar

