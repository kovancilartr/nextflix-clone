import React from "react";

interface videoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<videoPlayerProps> = ({ videoUrl }) => {
  return <video className="h-full w-full" controls src={videoUrl}></video>;
};

export default VideoPlayer;
