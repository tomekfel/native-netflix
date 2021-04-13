import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    height: 300,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    marginLeft: 40,
    marginTop: 40,
    borderRadius: 5,
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});

export default styles;
