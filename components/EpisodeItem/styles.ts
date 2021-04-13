import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  description: {
    color: 'darkgrey',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    // paddingLeft: 15,
  },
  duration: {
    color: 'darkgrey',
    fontSize: 10,
  },
  image: {
    height: 100,
    aspectRatio: 3 / 6,
    resizeMode: 'cover',
    borderRadius: 3,
  },
});

export default styles;
