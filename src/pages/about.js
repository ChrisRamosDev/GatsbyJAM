import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="font-bold text-6xl mb-2">About</h1>
        <p className="text-xl">
          This is a sample Gatsby app created to demonstrate an integration with{" "}
          <a
            className="font-bold no-underline hover:underline"
            href="https://www.cosmicjs.com/"
          >
            CosmicJS
          </a>{" "}
          and{" "}
          <a
            className="font-bold no-underline hover:underline"
            href="https://www.gatsbyjs.com/cloud/"
          >
            Gatsby Cloud
          </a>{" "}
          for{" "}
          <a
            className="font-bold no-underline hover:underline"
            href="https://jamstack.training"
          >
            https://jamstack.training
          </a>
        </p>
        <p>Thank you for taking this course!</p>
      </div>
    </Layout>
  )
}
export default AboutPage
