import React from "react";
import {
  View,
  // Image,
  Text,
  // ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
// import { SharedElement } from "react-navigation-shared-element";
import {
  // MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

import styles from "./styles";
import { data } from "../../config/data";
import EpisodeItem from "../../components/EpisodeItem";
import VideoPlayer from "../../components/VideoPlayer";

const MovieDetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { item } = route.params;

  const [playing, setPlaying] = React.useState(false);

  const renderedList = (
    <View style={styles.details}>
      <View style={styles.titleBackground}>
        <Text style={styles.title}>{item.imdb_title}</Text>

        <View
          style={{
            flexDirection: "row",
            // justifyContent: 'center',
            alignItems: "center",
          }}
        >
          <Text style={styles.match}>{item.imdb_user_rating}</Text>
          <Text style={styles.year}>{parseInt(item.imdb_date_published)}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>{item.imdb_rating}</Text>
          </View>
          <Text style={styles.year}>{item.imdb_duration}</Text>
          {/* <MaterialIcons name='hd' size={24} color='white' /> */}
        </View>
      </View>

      {/* Buttons */}
      <Pressable style={styles.playButton} onPress={() => setPlaying(!playing)}>
        <Text style={styles.playButtonText}>
          <Entypo name="controller-play" size={16} color="black" />{" "}
          {playing ? "Pause" : "Play"}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => console.log("Download")}
        style={styles.downloadButton}
      >
        <Text style={styles.downloadButtonText}>
          <AntDesign name="download" size={16} color="white" /> Download
        </Text>
      </Pressable>

      {/* Description */}
      <View>
        <Text style={styles.description}>{item.imdb_description}</Text>
        <Text style={styles.genre}>{item.imdb_genre}</Text>

        {/* Row with icon buttons */}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={styles.icon}>
            <AntDesign name="plus" size={24} color="white" />
            <Text style={styles.iconText}>My List</Text>
          </View>
          <View style={styles.icon}>
            <Feather name="thumbs-up" size={24} color="white" />
            <Text style={styles.iconText}>Rate</Text>
          </View>
          <View style={styles.icon}>
            <FontAwesome name="send-o" size={24} color="white" />
            <Text style={styles.iconText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      key={item.imdb_link}
      onPress={() =>
        navigation.push("DetailsScreen", {
          item,
        })
      }
    >
      <EpisodeItem episode={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* VideoPlayer */}
      <VideoPlayer episode={item} playing={playing} />

      {/* Episodes */}
      <FlatList
        data={data.records}
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
      animation: "move",
      resize: "clip",
    },
  ];
};

export default MovieDetailsScreen;
