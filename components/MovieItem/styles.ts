import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    marginHorizontal: 5,
    // marginBottom: 25,
  },
  rating: {
    position: 'absolute',
    width: 100,
    zIndex: 100,
    left: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.7,
    marginHorizontal: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textRating: {
    color: 'white',
    fontSize: 15,
  },
});
export default styles;
