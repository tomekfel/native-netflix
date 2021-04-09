import { StyleSheet, StatusBar } from 'react-native';

const height = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height,
    paddingHorizontal: 15,
  },
});

export default styles;
