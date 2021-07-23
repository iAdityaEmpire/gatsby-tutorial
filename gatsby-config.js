module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Codivate Blog",
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `blog`,
              path: `${__dirname}/blog`,
          }
      },
      "gatsby-plugin-mdx",
  ],
    flags: {
        FAST_DEV: true,
    }
};
