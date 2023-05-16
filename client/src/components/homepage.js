import React, { useState } from "react";
import youtube from '../api/youtube';
import "bootstrap/dist/css/bootstrap.css";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";
import SearchBar from "./searchBar";

export default function Homepage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    });

    setVideos(response.data.items);
    console.log("this is resp", response);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <SearchBar handleFormSubmit={handleSubmit} />
      <div className='ui grid'>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}
