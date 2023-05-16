import React from 'react';
import VideoItem from './videoItem';
import '../styles/videoItem.css'

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return (
            <div className='col'>
                <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
            </div>
        );
        // console.log(video.id);
    });

    return (
        <div className='containter vidlist'>
            <div className='row'>
                {renderedVideos}
            </div>
        </div>
    );
};
export default VideoList;