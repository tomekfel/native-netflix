import { StyleSheet, StatusBar } from 'react-native';

const height = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height,
    paddingHorizontal: 15,
    backgroundColor: 'red',
    alignContent: 'flex-start',
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
    // overflow: 'hidden',
    // alignItems: 'flex-start',
    // aspectRatio: 5 / 3,
    // borderRadius: 5,
    // marginHorizontal: 5,
    // marginBottom: 25,
  },
  match: {},
  year: {},
  ageContainer: {},
  age: {},
  seasons: {},
});

export default styles;
