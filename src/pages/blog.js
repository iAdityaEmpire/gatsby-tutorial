import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout";
import {navLinkText} from "../css/layout.module.css";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <Link to={`/blog${node.frontmatter.slug}`} className={navLinkText}>{node.frontmatter.title}</Link>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
          id
          body
          parent {
            ... on File {
              modifiedTime(formatString: "MMMM D, YYYY")
            }
          }
        }
      }
    }
`

export default BlogPage