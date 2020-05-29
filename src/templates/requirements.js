import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import VersionSelector from "../components/versionSelector"

export default function PageTemplate({ data: { mdx, allMdx } }) {
  return (
    <Layout>
      <SEO title={`${mdx.frontmatter.title} ${mdx.frontmatter.version} Requirements`} />
      <div className="requirement-header d-flex content-between">
        <h1>{mdx.frontmatter.title} {mdx.frontmatter.version}</h1>
        <VersionSelector 
            data={allMdx.edges} 
            currentVersion={mdx.frontmatter.version}
            component={mdx.frontmatter.slug}
          />
      </div>
      <div className="requirement-sub-header">
        {mdx.frontmatter.zeplin ? <a href={mdx.frontmatter.zeplin} target="blank">View zeplin</a> : null} {mdx.frontmatter.jira ? <a href={mdx.frontmatter.jira} target="blank">View JIRA ticket</a> : null}
      </div>
      <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
  </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String, $comp: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        version
        slug
        jira
        zeplin
      }
    }
    allMdx(filter: {frontmatter: {slug: {eq: $comp }}}, sort: {fields: [frontmatter___version,frontmatter___slug]}) {
      edges {
        node {
          frontmatter {
            title
            version
            slug
            zeplin
            jira
          }
        }
      }
    }
  }
  
`