module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Vijay Kolar',
    description: 'UI Designer and UI Developer',
    keywords: 'Ui Designer, UI developer, portfolio, personal website',
    url: 'https://www.vijaykolar.com',
    themecolor: '#5D6D7E'
  }
};
