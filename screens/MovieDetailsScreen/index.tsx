import React from 'react';
import { View, Image, Text, ImageBackground, Pressable } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './styles';
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

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
      <ImageBackground
        source={
          item.imdb_image_url
            ? {
                uri: item.imdb_image_url,
              }
            : require('../../assets/images/no-image.png')
        }
        style={styles.backgroundImage}
        blurRadius={10}
      >
        <SharedElement id={`item.${item.imdb_image_url}.image_url`}>
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
        </SharedElement>
      </ImageBackground>

      <View style={styles.details}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>{item.imdb_title}</Text>

          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.match}>{item.imdb_user_rating}</Text>
            <Text style={styles.year}>
              {parseInt(item.imdb_date_published)}
            </Text>
            <View style={styles.ageContainer}>
              <Text style={styles.age}>{item.imdb_rating}</Text>
            </View>
            <Text style={styles.year}>{item.imdb_duration}</Text>
            {/* <MaterialIcons name='hd' size={24} color='white' /> */}
          </View>
        </View>
      </View>

      {/* Buttons */}
      <Pressable onPress={() => console.log('Play')} style={styles.playButton}>
        <Text style={styles.playButtonText}>
          <Entypo name='controller-play' size={16} color='black' /> Play
        </Text>
      </Pressable>
      <Pressable
        onPress={() => console.log('Download')}
        style={styles.downloadButton}
      >
        <Text style={styles.downloadButtonText}>
          <AntDesign name='download' size={16} color='white' /> Download
        </Text>
      </Pressable>

      {/* Description */}
      <View>
        <Text style={styles.description}>{item.imdb_description}</Text>
        <Text style={styles.genre}>{item.imdb_genre}</Text>
      </View>
    </View>
  );
};

MovieDetailsScreen.sharedElements = (route: any) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.imdb_image_url}.image_url`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};

export default MovieDetailsScreen;
