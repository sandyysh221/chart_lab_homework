import React from "react";
import "./SongSelect.css";

function SongSelect({ song, index }) {
  return (
    <div className="song-select">
      <li>
        <h1>Chart #{index + 1}</h1>
        <h2> Song: {song["im:name"].label}</h2>
        <h3>Artist: {song["im:artist"].label}</h3>
        <img src={song["im:image"][2].label} alt="album" />
        <p />
        <audio controls src={song.link[1].attributes.href} />
      </li>
    </div>
  );
}

export default SongSelect;
