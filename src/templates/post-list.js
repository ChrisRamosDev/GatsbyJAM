import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import ArticleList from "../components/articleList"

export default function PostList({ data, pageContext }) {
  const trips = data.allCosmicjsTrips.edges
  const { currentPage, numberOfPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? "/" : "/" + (currentPage - 1).toString()
  const nextPage = "/" + (currentPage + 1).toString()

  console.log(trips)

  return (
    <Layout>
      {trips.map(({ node }, i) => (
        <ArticleList node={node} key={i} />
      ))}
      <ul className="pagination">
        {!isFirst && (
          <li className="page-item p-3">
            <Link to={previousPage}>← Previous Page</Link>
          </li>
        )}
        {Array.from({ length: numberOfPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`} className="page-item p-3">
            <Link to={`/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
          </li>
        ))}
        {!isLast && (
          <li className="page-item p-3">
            <Link to={nextPage}>Next Page →</Link>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allCosmicjsTrips(
      sort: { fields: published_at, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          metadata {
            description
            author
            hero {
              url
            }
          }
          published_at(formatString: "Do MMMM Y")
          slug
          title
        }
      }
    }
  }
`
