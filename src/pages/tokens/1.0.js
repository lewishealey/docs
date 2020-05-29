import React from "react"
import tokens from "test-tokens/dist/web/1.0.0/tokens.json";

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tokens 1.0</h1>

    {Object.keys(tokens).map(function(token, index) {
        return <tr><td id={`${token}`}>${token}</td><td>{tokens[token]}</td></tr>
    })}
  </Layout>
)

export default IndexPage