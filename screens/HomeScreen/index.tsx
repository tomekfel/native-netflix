import * as React from 'react';
import { Image, FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import HomeCategory from '../../components/HomeCategory';
import styles from './styles';
import { data, categories } from '../../config';

const renderItem = ({ item }: { item: any }) => (
  <HomeCategory category={item} />
);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {categories && (
        <FlatList
          data={categories.records}
          renderItem={renderItem}
          keyExtractor={(item) => item.uri}
        />
      )}
    </View>
  );
}
