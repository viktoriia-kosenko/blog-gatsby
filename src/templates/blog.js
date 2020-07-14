import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        subject
        featimg {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

const Blog = props => {
  console.log(props)
  return (
    <Layout>
      <Img
        fluid={
          props.data.markdownRemark.frontmatter.featimg.childImageSharp.fluid
        }
        alt={props.data.markdownRemark.frontmatter.title}
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <p>
        Tags:{' '}
        {props.data.markdownRemark.frontmatter.subject.map((tag, index) => {
          return <span key={index}>{tag} </span>
        })}{' '}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}

export default Blog
