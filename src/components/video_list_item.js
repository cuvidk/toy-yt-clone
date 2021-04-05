import React from "react";

const VideoListItem = ({ video, onVideoSelected }) => {
  return (
    <li className="list-group-item" onClick={() => onVideoSelected(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
