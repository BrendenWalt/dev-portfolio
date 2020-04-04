import React from "react"

import "./contentContainer.css"

const ContentContainer = ({children}) => {
  return (
    <div className="content-container">
      <h1>CONTENT IS HERE</h1>
      {children}
    </div>
  )
}

export default ContentContainer