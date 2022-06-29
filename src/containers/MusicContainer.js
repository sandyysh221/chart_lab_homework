import React, { useEffect, useState } from "react";
import SongList from "../components/SongList";
import "./MusicContainer.css";

const MusicContainer = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = function () {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((result) => result.json())
      .then((songs) => setSongs(songs.feed.entry));
  };

  return (
    <div className="music-container">
      <SongList songs={songs} />
    </div>
  );
};

export default MusicContainer;
