import { navigate } from "gatsby"
import React from "react"

const VersionSelector = ({ data, currentVersion, component}) => (
    <div style={{ position: 'relative' }}>
      <div className="dropdown">
        <select className="form-control" onChange={event => {
            event.preventDefault()
            navigate(`/${component}/${event.target.value}/`)
          }}>
          {data.map((edge) => {
              return <option selected={currentVersion == edge.node.frontmatter.version ? true : false}>{edge.node.frontmatter.version}</option>
          })}
        </select>

      </div>
    </div>
)

export default VersionSelector
