import React from 'react';
import CalendarOccupiedRoom from './CalendarOccupiedRoom';

const CalendarDays = ({ day, occupiedRooms, changeCurrentDay }) => {

  let firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let dayIndex = 0; dayIndex < 42; dayIndex++) {
    if (dayIndex === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (dayIndex === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (dayIndex - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
      occupiedRooms: []
    };

    for (let room of occupiedRooms) {
      let rentDueDate = new Date(room.rentDueDate);

      if (
        rentDueDate.getDate() === firstDayOfMonth.getDate() &&
        rentDueDate.getMonth() === firstDayOfMonth.getMonth() &&
        rentDueDate.getFullYear() === firstDayOfMonth.getFullYear()
      ) {
        calendarDay.occupiedRooms.push(room);
        break; // No need to continue checking other rooms for the same day
      }
    }

    currentDays.push(calendarDay);
  }

  return (
    <div className="table-content">
      {currentDays.map((day) => (
        <div
          key={`${day.year}-${day.month}-${day.number}`}
          className={
            'calendar-day' +
            (day.currentMonth ? ' current' : '') +
            (day.selected ? ' selected' : '')
          }
          onClick={() => changeCurrentDay(day)}
        >
          <p>{day.number}</p>
          {day.occupiedRooms.length > 0 && (
            <div className="occupied-rooms">
              {day.occupiedRooms.map((room) => (
                <CalendarOccupiedRoom key={room.roomId} room={room} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CalendarDays;
