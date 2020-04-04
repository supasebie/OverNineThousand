module.exports = {
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/over-nine-thousand.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
