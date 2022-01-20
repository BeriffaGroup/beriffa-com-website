module.exports = {
  siteMetadata: {
    title: 'Beriffa Group',
    description: 'At Beriffa Group we create stunning web solutions.',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: 'header',
        withWebp: true, // true, false (default false)
        imageQuality: 75, // 0-100 (default 75)
        repository: {
          baseUrl:
            'https://github.com/BeriffaGroup/beriffa-com-website',
          subDirectory: '/packages/example',
        },
      },

    },
  ],
};
