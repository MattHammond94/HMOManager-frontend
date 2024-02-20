import Modal from "./Modal";
import { useState } from "react";
import SiteTile from "./SiteTile";
import RoomTile from "./RoomTile";

const Tile = ({ data, editMode, setEditMode }) => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);

  console.log(data)

  // if staement here

  return (
    <>
    {editMode ? (
        <div onClick={() => setModalOpenStatus(true)} className="siteContainer">
          <SiteTile data={data} />
        </div>
      ) : (
        <div className="siteContainer">
          <a href={`/site/${data.siteId}`}>
            <SiteTile data={data}/>
          </a>
        </div>
      )}
        {/* {data.roomId ? (
          <a href={`/site/${data.siteId}`}>
            <RoomTile data={data} />
          </a>
        ) : (
          <div onClick={() => setModalOpenStatus(true)} className="siteContainer">
            <RoomTile data={data} />
          </div>
        )} */}
      <Modal status={modalOpenStatus} data={data} setStatus={setModalOpenStatus} >
      </Modal>
    </>
  );
};

export default Tile;
