import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RoomsFeed = () => {
  const { id } = useParams();

  useEffect(() => {
    
  }, [])

  return (
    <div className='roomsFeedContainer'>
      <h1>This is the rooms feed</h1>
    </div>
  )
}

export default RoomsFeed