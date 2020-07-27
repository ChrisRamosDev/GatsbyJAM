import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Article from "../components/article"

export default function PostPage({ data }) {
  const trip = data.cosmicjsTrips
  return (
    <Layout>
      <Article data={trip} />
    </Layout>
  )
}

export const postPageQuery = graphql`
  query postPageQuery($slug: String!) {
    cosmicjsTrips(slug: { eq: $slug }) {
      metadata {
        author
        hero {
          url
        }
      }
      published_at(formatString: "Do MMMM Y")
      title
      content
    }
  }
`
