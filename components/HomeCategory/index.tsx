import React from 'react';
import { FlatList, Pressable } from 'react-native';
import axios from 'axios';

import { Text, View } from '../../components/Themed';
import MovieItem from '../../components/MovieItem';
import styles from './styles';

interface HomeCategoryProps {
  name: string;
  uri: string;
}

const HomeCategory = ({
  category,
  navigation,
}: {
  category: HomeCategoryProps;
  navigation: any;
}) => {
  const [movies, setMovies] = React.useState([] as any);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const getPosts = async () => {
    const { data } = await axios.get(category.uri);
    console.log(category.uri);
    setMovies(data.records);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  const loadMore = async () => {
    if (currentPage < totalPages) {
      const url = category.uri.replace(`&l=1`, `&l=${currentPage + 1}`);

      const { data } = await axios.get(url);
      console.log(url);
      setMovies([...movies, ...data.records]);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      key={item.imdb_link}
      onPress={() =>
        navigation.push('DetailsScreen', {
          item,
        })
      }
    >
      <MovieItem item={item} />
    </Pressable>
  );

  return (
    <View style={styles.list}>
      {movies && (
        <>
          <Text style={styles.title}>{category.name}</Text>

          <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={(item) => item.imdb_link}
            onEndReached={loadMore}
            onEndReachedThreshold={3}
            horizontal
          />
        </>
      )}
    </View>
  );
};

export default HomeCategory;
