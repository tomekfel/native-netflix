import * as React from 'react';
import { FlatList } from 'react-native';
import { API_KEY } from '@env';

import { View } from '../../components/Themed';
import HomeCategory from '../../components/HomeCategory';
import styles from './styles';
import { categories } from '../../config';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const renderItem = ({ item }: { item: any }) => (
    <HomeCategory category={item} navigation={navigation} />
  );

  console.log(API_KEY);

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
