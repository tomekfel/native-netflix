import * as React from "react";

import { Text, View } from "../../components/Themed";
import styles from "./styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}
