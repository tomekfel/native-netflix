import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Video } from "expo-av";

import styles from "./styles";
import { Episode } from "../../types";

interface VideoPlayerProps {
  episode: Episode;
  playing: boolean;
}
const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode, playing } = props;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  React.useEffect(() => {
    playing ? video.current.playAsync() : video.current.pauseAsync();
  }, [playing]);

  //   React.useEffect(() => {
  //     console.log("status", status);
  //   }, [status]);

  //   const handleVideoRef = (component: any) => {
  //     const playbackObject = component;
  //     const source = {
  //       uri: "https://www.youtube.com/watch?v=vM-Bja2Gy04",
  //     };
  //     const initialStatus = {};
  //     const downloadFirst = false;

  //     playbackObject.loadAsync(source, initialStatus, downloadFirst);
  //   };

  return (
    // <ImageBackground
    //   source={
    //     episode.imdb_image_url
    //       ? {
    //           uri: episode.imdb_image_url,
    //         }
    //       : require("../../assets/images/no-image.png")
    //   }
    //   style={styles.backgroundImage}
    //   blurRadius={20}
    // >
    <SharedElement id={`item.${episode.imdb_image_url}.image_url`}>
      {/* <Image
          style={styles.image}
          source={
            episode.imdb_image_url
              ? {
                  uri: episode.imdb_image_url,
                }
              : require("../../assets/images/no-image.png")
          }
        /> */}

      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping={false}
        posterSource={{
          uri: episode.imdb_image_url,
        }}
        usePoster={true}
        posterStyle={{ resizeMode: "contain" }}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </SharedElement>
    // </ImageBackground>
  );
};

export default VideoPlayer;
