import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import "rsuite/dist/styles/rsuite.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Work from "../components/work"
import About from "../components/about"
import Contact from "../components/contact"

class IndexPage extends React.Component {
  render() {
    const pageData = this.props.data.cosmicjsPages.metadata
    const peopleData = this.props.data.allCosmicjsPeople.edges
    const serviceData = this.props.data.allCosmicjsServices.edges
    const projectData = this.props.data.allCosmicjsProjects.edges
    const styles = {
      splash: {
        background: `#000000`,
        paddingTop: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      },
      splashPhrase: {
        width: "70%",
        paddingLeft: "20%",
        color: "#ffffff",
      },
    }
    if (pageData.splash_image) {
      styles.splashbackground = `url(${pageData.splash_image.url})`
      styles.splashbackgroundSize = `cover`
      styles.splashbackgroundRepeat = "no-repeat"
      styles.splashbackgroundPosition = "center"
    }
    return (
      <Layout>
        <SEO title="Home" keywords={[`cosmic js`, `aplication`, `react`]} />
        <section style={styles.splash} className="section-container splash">
          {pageData.splash_phrase ? (
            <div className="splash_phrase" style={styles.splashPhrase}>
              <h2 style={{ fontSize: "2.5rem" }}>{pageData.splash_phrase}</h2>
            </div>
          ) : null}
        </section>
        <Work serviceData={serviceData} pageData={pageData} />
        <Projects projectData={projectData} />
        <About peopleData={peopleData} pageData={pageData} />
        <Contact name="contact" contactEmail={pageData.contact_email} />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query Index {
    cosmicjsPages(slug: { eq: "home" }) {
      metadata {
        splash_image {
          url
        }
        splash_phrase
        contact_email
        service_description
        people_description
      }
    }
    allCosmicjsPeople {
      edges {
        node {
          title
          metadata {
            image {
              url
            }
            job_title
          }
        }
      }
    }
    allCosmicjsServices {
      edges {
        node {
          title
          metadata {
            icon
            description
            summary
          }
        }
      }
    }
    allCosmicjsProjects {
      edges {
        node {
          title
          metadata {
            date
            image {
              url
            }
            gallery
            summary
            description
          }
        }
      }
    }
  }
`
