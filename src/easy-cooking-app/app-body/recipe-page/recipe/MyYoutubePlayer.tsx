import * as React from "react";
import YouTube from "react-youtube";
import { Options } from "react-youtube";
import { YouTubePlayer } from "youtube-player/dist/types";

interface VideoProps {
  youtubeVideoId: string;
}

const MyYoutubePlayer: React.FC<VideoProps> = (props) => {
  const youtubePlayerOptions: Options = {
    height: "190",
    width: "320",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    console.log("onReady fired");
    // access to player in all event handlers via event.target
    console.log("MyYoutubePlayer duration is: " + event.target.getDuration());
    console.log("MyYoutubePlayer Volume is: " + event.target.getVolume());
    console.log("MyYoutubePlayer Url is: " + event.target.getVideoUrl());
    console.log("Player state is: " + event.target.getPlayerState());
    console.log(
      "MyYoutubePlayer Playback quality  is: " +
        event.target.getPlaybackQuality()
    );
  };

  return (
    <React.Fragment>
      <YouTube
        videoId={props.youtubeVideoId}
        opts={youtubePlayerOptions}
        onReady={onReady}
      />
    </React.Fragment>
  );
};

export default MyYoutubePlayer;
