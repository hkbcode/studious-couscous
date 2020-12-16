module.exports = {

  siteMetadata: {
    title: "React Developer",
    description: "Personal blog of hemant bhoi a fullstack react developer",
    author: "Hemant kumar Bhoi",
  },

    pathPrefix: "/gh-repo-name",


  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
