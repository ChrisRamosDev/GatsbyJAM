require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Cosmic Gatsby site`,
    description: `My Gatsby JS / Cosmic JS site styled with Post CSS and Tailwind CSS`,
    author: `Christopher Ramos <Cramos7114@gmail.com>`,
  },
  plugins: [
    {
      resolve: "gatsby-source-cosmicjs",
      options: {
        bucketSlug: process.env.COSMIC_BUCKET,
        objectTypes: ["trips"],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY,
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
}
