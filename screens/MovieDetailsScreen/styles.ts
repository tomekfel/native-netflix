import { StyleSheet, StatusBar } from 'react-native';

const height = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height,
  },
  details: {
    paddingTop: 10,
  },
  backgroundImage: {
    height: 300,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    marginLeft: 40,
    marginTop: 40,
    borderRadius: 5,
  },
  titleBackground: {
    backgroundColor: '#000',
    opacity: 0.8,
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    paddingBottom: 5,
  },
  match: {
    color: 'lime',
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.6,
    paddingHorizontal: 10,
  },
  ageContainer: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
  },
  age: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  // Buttons
  playButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
  },
  playButtonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  downloadButton: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  description: {
    color: 'white',
    fontSize: 16,
  },
  genre: {
    color: 'white',
    opacity: 0.9,
    marginTop: 10,
    fontSize: 16,
  },
  icon: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  iconText: {
    marginTop: 5,
    color: 'darkgrey',
  },
});

export default styles;
