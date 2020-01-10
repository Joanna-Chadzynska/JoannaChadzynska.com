import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const AboutMePage = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>About me</h1>
        <h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title} <span>{node.frontmatter.date}</span>
                </h3>
              </Link>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </h4>
      </div>
    </Layout>
  )
}

export default AboutMePage
