import * as React from "react";
import YouTube from "react-youtube";
import { Options } from "react-youtube";
// import YouTubePlayer from "youtube-player";

interface VideoProps {
  youtubeVideoId: string;
}
export default class Video extends React.Component<VideoProps> {
  render() {
    console.log("this.props.youtubeVideoId", this.props.youtubeVideoId);

    const opts: Options = {
      height: "190",
      width: "320",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    // @ts-ignore
    return (
      <React.Fragment>
        <YouTube
          videoId={this.props.youtubeVideoId}
          opts={opts}
          onReady={this._onReady}
        />
        {/*<p>{this.props.url}</p>*/}
        {/*<p>{youtubeVideoId}</p>*/}
      </React.Fragment>
    );
  }

  _onReady = (event: any) => {
    console.log("_onReady fired");
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
}
