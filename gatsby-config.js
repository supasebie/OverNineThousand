module.exports = {
  pathPrefix: `/public`,
  siteMetadata: {
    title: 'Over Nine Thousand',
    author: 'J. Sebastian Ruiz',
    description: '9001 Development (Over Nine Thousand) homepage',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Over Nine Thousand',
        description: 'Homepage of the coolest web development shop in Vegas!',
        short_name: '^9k',
        start_url: '/',
        background_color: '#222024',
        theme_color: '#222024',
        display: 'minimal-ui',
        icon: 'src/images/over-nine-thousand.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
