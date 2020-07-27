import React from "react"
import { Link } from "gatsby"

const ArticleList = ({ node }) => (
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <article className="overflow-hidden rounded-lg shadow-lg">
      <img className="block w-full" src={node.metadata.hero.url} alt="Hero" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link
            className="no-underline hover:underline hover:text-teal-500"
            to={`/` + node.slug}
          >
            {node.title}
          </Link>
        </div>
        <p className="text-gray-700 text-base">{node.metadata.description}</p>
      </div>
      <div className="px-6 py-4">
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2">
          {node.metadata.author}
        </p>
        <p className="inline-block rounded-full px-3 py-1 text-sm text-gray-700 mr-2">
          {node.published_at}
        </p>
      </div>
    </article>
  </div>
)

export default ArticleList
