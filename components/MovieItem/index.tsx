import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './styles';

const MovieItem = ({ item }: { item: any }) => {
  return (
    <>
      <View style={styles.rating}>
        <Text style={styles.textRating}>
          <Ionicons name='star' size={20} color='yellow' />{' '}
          {item.imdb_user_rating}
        </Text>
      </View>
      <SharedElement id={`item.${item.imdb_image_url}.image_url`}>
        <Image
          style={styles.image}
          source={
            item.imdb_image_url
              ? { uri: item.imdb_image_url }
              : require('../../assets/images/no-image.png')
          }
        />
      </SharedElement>
    </>
  );
};

export default MovieItem;
