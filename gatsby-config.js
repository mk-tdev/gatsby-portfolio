// /* eslint-disable prettier/prettier */
// export default {
//   siteMetadata: {
//     // eslint-disable-next-line quotes
//     title: 'Gatsby Portfolio Project',
//     description:
//       // eslint-disable-next-line quotes
//       'Kick off your next, great Gatsby project with this portfolio project',
//   },
//   plugins: [],
// };

module.exports = {
  siteMetadata: {
    // eslint-disable-next-line quotes
    title: 'Gatsby Portfolio Project',
    description:
      // eslint-disable-next-line quotes
      'Kick off your next, great Gatsby project with this portfolio project',
    social: {
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://www.twitter.com/',
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:300,400`, `source sans pro:300,400,400i,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
