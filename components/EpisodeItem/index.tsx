import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

interface EpisodeItemProps {
  episode: {
    imdb_link: string;
    release_name: string;
    imdb_user_rating: string;
    imdb_rating_count: string;
    imdb_title: string;
    imdb_description: string;
    imdb_genre: string;
    imdb_image_url: string;
    imdb_rating: string;
    imdb_duration: string;
    imdb_trailer_url: string;
    version: string;
    yt_trailer_url: null;
    imdb_date_published: string;
    imdb_update_date: string;
    create_date: string;
    update_date: string;
  };
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode } = props;
  return (
    <View style={{ paddingVertical: 10 }}>
      <View style={styles.container}>
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

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.imdb_title}</Text>
          <Text style={styles.duration}>{episode.imdb_duration}</Text>
        </View>

        <AntDesign
          name='download'
          size={24}
          color='white'
          onPress={() => console.log(`Download ${episode.imdb_title}`)}
        />
      </View>

      <Text style={styles.description}>{episode.imdb_description}</Text>
    </View>
  );
};

export default EpisodeItem;
