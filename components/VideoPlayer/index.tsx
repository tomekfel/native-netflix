import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
// import { Video } from 'expo-av';

import styles from './styles';
import { Episode } from '../../types';

interface VideoPlayerProps {
  episode: Episode;
  // playing: boolean;
  trailer: string;
}
const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;

  return (
    <ImageBackground
      source={
        episode.imdb_image_url
          ? {
              uri: episode.imdb_image_url,
            }
          : require('../../assets/images/no-image.png')
      }
      style={styles.backgroundImage}
      blurRadius={20}
    >
      <SharedElement id={`item.${episode.imdb_image_url}.image_url`}>
        <Image
          style={styles.image}
          source={
            episode.imdb_image_url
              ? {
                  uri: episode.imdb_image_url,
                }
              : require('../../assets/images/no-image.png')
          }
        />
      </SharedElement>
    </ImageBackground>
  );
};

export default VideoPlayer;
