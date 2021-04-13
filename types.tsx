export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  DetailsScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  "Coming Soon": undefined;
  Search: undefined;
  Downloads: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type ComingSoonParamList = {
  ComingSoonScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type DownloadsParamList = {
  DownloadsScreen: undefined;
};

export type Episode = {
  imdb_link: string;
  release_name: string;
  imdb_user_rating: string;
  imdb_rating_count: string;
  imdb_title: string;
  imdb_description: string;
  imdb_genre: string;
  imdb_image_url: string;
  imdb_rating: string;
  imdb_duration: string;
  imdb_trailer_url: string;
  version: string;
  yt_trailer_url: null;
  imdb_date_published: string;
  imdb_update_date: string;
  create_date: string;
  update_date: string;
  video: string;
};
