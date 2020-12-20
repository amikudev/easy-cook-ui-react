import React from "react";
import { getYoutubeVideoId } from "../../../../utils/videoCalculations";
import Video from "./Video";
import classes from "./Source.module.scss";

export default class Source extends React.Component {
  render() {
    console.log("this.props.source.url", this.props?.source?.url);

    //check if it is a youtube url
    const youtubeVideoId = getYoutubeVideoId(this.props.source.url);
    if (!youtubeVideoId) {
      return (
        <div className={classes.nonVideoSourceBox}>
          {/*url*/}
          {this.props.source?.url ? (
            <div>
              <span className={classes.title}>Url: </span>
              <a
                href={this.props.source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to recipe source
              </a>
            </div>
          ) : null}
          {/*author*/}
          {this.props.source?.cook ? (
            <div>
              <span className={classes.title}>Cook: </span>
              <span>{this.props.source?.cook}</span>
            </div>
          ) : null}
          {/*book*/}
          {this.props.source?.book ? (
            <div>
              <span className={classes.title}>Book: </span>
              <span>{this.props.source?.book}</span>
            </div>
          ) : null}
          {/*page*/}
          {this.props.source?.page ? (
            <div>
              <span className={classes.title}>Page No.: </span>
              <span>{this.props.source?.page}</span>
            </div>
          ) : null}
        </div>
      );
    }
    if (youtubeVideoId) {
      return (
        <div>
          <Video youtubeVideoId={youtubeVideoId}></Video>
        </div>
      );
    }
  }
}
