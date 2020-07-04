import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="My blog" />
      <h1>Hi from my blog page</h1>
      <p>Welcome to page 2</p>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, index) => (
          <li key={index}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
