import React from "react"

const Article = ({ data }) => (
  <div>
    <div>
      <div className="font-bold text-6xl mb-2">{data.title}</div>
    </div>
    <div>
      <p className="mb-2 text-2xl font-semibold text-black-700 mr-2">
        Published by {data.metadata.author} @ {data.published_at}
      </p>
      <hr className="mb-2" />
      <div
        className="mb-2 text-xl text-black-700 mr-2"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  </div>
)

export default Article
