import React from "react";
import SongSelect from "./SongSelect";
import "./SongList.css";

function SongList({ songs }) {
  const songsItems = songs.map((song, index) => {
    return (
      <div className="song-list">
        <ul>
          <SongSelect song={song} key={index} index={index} />
        </ul>
      </div>
    );
  });

  return <>{songsItems}</>;
}

export default SongList;
