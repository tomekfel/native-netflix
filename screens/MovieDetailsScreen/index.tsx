import React from 'react';
import { View, Text, Pressable, FlatList, Linking } from 'react-native';
import { Entypo, AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';
import { DATA } from '../../config/data';
import EpisodeItem from '../../components/EpisodeItem';
import VideoPlayer from '../../components/VideoPlayer';

const MovieDetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { item } = route.params;
  const [trailer, setTrailer] = React.useState([] as any);

  const getTrailer = async () => {
    const parts = item.imdb_link.split('/');
    const movie_id = parts[4];
    const url = `https://www.beatporttopcharts.com/api/trailer/search.php?id=${movie_id}`;

    const { data } = await axios.get(url);

    if (data) {
      data.results.map((item: any) => {
        setTrailer([...trailer, ...data.results]);
      });
    }
  };

  React.useEffect(() => {
    getTrailer();
  }, []);

  React.useEffect(() => {
    console.log('trailer', trailer);
  }, [trailer]);

  const handlePress = async (itemValue: string) => {
    // const url =
    //   trailer[0].site == 'Vimeo'
    //     ? `https://vimeo.com/${trailer[0].key}`
    //     : `https://www.youtube.com/watch?v=${trailer[0].key}`;
    // await Linking.openURL(url);
    console.log(itemValue);
  };

  const renderedList = (
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
          <Text style={styles.year}>{parseInt(item.imdb_date_published)}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>{item.imdb_rating}</Text>
          </View>
          <Text style={styles.year}>{item.imdb_duration}</Text>
        </View>
      </View>

      {/* Buttons */}
      {/* <View style={styles.playButton}> */}
      {/* <Text style={styles.playButtonText}>
          <Entypo name='controller-play' size={16} color='black' /> Trailer
        </Text> */}
      <Picker
        style={{
          flex: 1,
          color: 'white',
          height: 50,
          justifyContent: 'center',
        }}
        // selectedValue={selectedLanguage}
        onValueChange={(itemValue: string, itemIndex: any) =>
          handlePress(itemValue)
        }
      >
        {trailer.map((item: any) => {
          console.log('item', item);
          return (
            <Picker.Item key={item.key} label='Trailer' value={item.key} />
          );
        })}
      </Picker>
      {/* </View> */}

      {/* <Pressable
        onPress={() => console.log('Download')}
        style={styles.downloadButton}
      >
        <Text style={styles.downloadButtonText}>
          <AntDesign name='download' size={16} color='white' /> Download
        </Text>
      </Pressable> */}

      {/* Description */}
      <View>
        <Text style={styles.description}>{item.imdb_description}</Text>
        <Text style={styles.genre}>{item.imdb_genre}</Text>

        {/* Row with icon buttons */}
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.icon}>
            <AntDesign name='plus' size={24} color='white' />
            <Text style={styles.iconText}>My List</Text>
          </View>
          <View style={styles.icon}>
            <Feather name='thumbs-up' size={24} color='white' />
            <Text style={styles.iconText}>Rate</Text>
          </View>
          <View style={styles.icon}>
            <FontAwesome name='send-o' size={24} color='white' />
            <Text style={styles.iconText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      key={item.imdb_link}
      onPress={() => {
        // setPlaying(false);
        navigation.push('DetailsScreen', {
          item,
        });
      }}
    >
      <EpisodeItem episode={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* VideoPlayer */}
      <VideoPlayer episode={item} /*playing={playing} */ trailer={trailer} />

      {/* Episodes */}
      <FlatList
        data={DATA.records}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdb_link}
        ListHeaderComponent={renderedList}
      />
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
