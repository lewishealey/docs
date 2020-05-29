import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Detail from '../components/detail'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Directory" />
    <h1>Directory</h1>
    {data.allMdx.group.map(function(version) {
      return <div className="detail-group">
        <h2 className="detail-group-title">{version.fieldValue}</h2>
        <div className="detail-group-items">
          {version.edges.map(function(requirement) {
            return <Link to={`/${requirement.node.frontmatter.slug}/${requirement.node.frontmatter.version}`}>
              <Detail file={requirement.node.frontmatter.preview} title={`${requirement.node.frontmatter.title} ${requirement.node.frontmatter.version}`}/></Link>
          })}
        </div>
      </div>
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AllRequirementsQuery {
    allMdx(sort: {fields: frontmatter___slug}) {
      group(field: frontmatter___version) {
        fieldValue
        edges {
          node {
            id
            frontmatter {
              title
              slug
              date
              version
              jira
              zeplin
              preview
            }
          }
        }
      }
    }
  }
`