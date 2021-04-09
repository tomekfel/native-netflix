import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';

const MovieDetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { item } = route.params;

  // console.log(item);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          item.imdb_image_url
            ? {
                uri: item.imdb_image_url,
              }
            : require('../../assets/images/no-image.png')
        }
      />
      <Text>{item.imdb_title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.match}>{item.imdb_user_rating}</Text>
        <Text style={styles.year}>{item.imdb_date_published}</Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}>{item.imdb_rating}</Text>
        </View>
        <Text style={styles.seasons}>{item.imdb_duration}</Text>
        <MaterialIcons name='hd' size={24} color='white' />
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
