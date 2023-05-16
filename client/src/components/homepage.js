<<<<<<< HEAD
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
=======
import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

export default function Homepage() {
    return <h1>Welcome to the Home Page!</h1>;
}
>>>>>>> 9248ab852324baf731677d5cbf34b0f89b379d05
