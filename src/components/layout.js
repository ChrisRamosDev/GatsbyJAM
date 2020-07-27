import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <main className="flex flex-wrap mx-1 lg:mx-4">{children}</main>
      </div>
    </>
  )
}

export default Layout
