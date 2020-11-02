/**
 *
 * @param url
 * @returns return youtube video id if it is a youtube video. else it returns null
 */
const getYoutubeVideoId = (url) => {
  //handle default error cases
  if (
    url === null ||
    url === undefined ||
    url === "" ||
    typeof url !== "string"
  ) {
    return null;
  }
  if (url.startsWith("https://www.youtube.com/watch?v=")) {
    let videoId = url.split("v=")[1];
    let ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
  } else if (url.startsWith("https://youtu.be/")) {
    let videoId = url.split("https://youtu.be/")[1];
    let ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
  } else {
    return null;
  }
};

const printAllRecipies = (recipeList) => {
  recipeList.forEach((recipe) => {
    console.log(recipe.source.url);
  });
};
export { getYoutubeVideoId, printAllRecipies };
