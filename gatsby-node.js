/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
// Destructure the createPage function from the actions objet
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              version
              date
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/${node.frontmatter.slug}/${node.frontmatter.version}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/requirements.js`),
      // You can use the values in this context in
      // our page layout component
      context: { 
        id: node.id,
        comp: node.frontmatter.slug
      },
    })
  })
}
