const path = require("path")

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allCosmicjsTrips(
        sort: { fields: published_at, order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const trips = result.data.allCosmicjsTrips.edges
  const tripsPerPage = 3
  const numberOfPages = Math.ceil(trips.length / tripsPerPage)
  Array.from({ length: numberOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/post-list.js"),
      context: {
        limit: tripsPerPage,
        skip: i * tripsPerPage,
        numberOfPages,
        currentPage: i + 1,
      },
    })
  })

  trips.forEach((trip, i) => {
    createPage({
      path: trip.node.slug,
      component: path.resolve("./src/templates/post-page.js"),
      context: {
        slug: trip.node.slug,
      },
    })
  })
}

module.exports = {
  createPages,
}
