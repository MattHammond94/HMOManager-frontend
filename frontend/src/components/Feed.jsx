import Tile from "./Tile.jsx";
import { useState, useEffect } from 'react';
import { apiUrl } from '../utils/globals.js';
import { useParams} from "react-router-dom";
import SiteTile from "./SiteTile.jsx";

const Feed = ({data, editMode, setEditMode}) => {
  const { id } = useParams();

  // const renderComponent = () => {
  //   if (type === "Site") {
  //     return data.map((site) => (
  //       <SiteTile key={site.siteId} data={site} editMode={ editMode } setEditMode={setEditMode}/>
  //     ));
  //   } else if (type === "Room") {
  //     return data.map((room) => (
  //       <Tile key={room.roomId} data={room} />
  //     ));
  //   } else {
  //     return null; // Handle other cases or return nothing
  //   }
  // }
  
  return (
    <div className="siteFeedContainer">
      {/* {data && (
        data.map((entity) => (
          <Tile key={entity[0]} data={entity[0]} editMode={editMode} setEditMode={setEditMode}/>
        ))
      )} */}
      wrong feed
    </div>
  )
}

export default Feed