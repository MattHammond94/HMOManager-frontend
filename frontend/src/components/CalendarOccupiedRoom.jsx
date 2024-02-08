const CalendarOccupiedRoom = (room) => {
  return (
    <div className="occupied-room">
      <p>{room.room.name} Rent: £{room.room.rentAmount}</p>
    </div>
  );
}

export default CalendarOccupiedRoom;