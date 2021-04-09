export const categories = {
  records: [
    {
      name: 'Movies updated in the last 7 days',
      uri:
        'https://beatporttopcharts.com/php/api/movie/search.php?s=&l=1&c=7&rating_count=1,MAX',
    },
    {
      name: 'Movies updated in the last 2 weeks',
      uri:
        'https://beatporttopcharts.com/php/api/movie/search.php?s=&l=1&c=14&rating_count=1,MAX',
    },
    {
      name: 'Best Movies updated this month',
      uri:
        'https://beatporttopcharts.com/php/api/movie/search.php?s=&l=1&c=30&rating_count=1000,MAX',
    },
    {
      name: 'Best Movies of All Time',
      uri:
        'https://beatporttopcharts.com/php/api/movie/search.php?s=&l=1&c=9999&rating_count=5000,MAX',
    },
  ],
};
