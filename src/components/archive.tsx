import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  children?: any
}

interface Edge {
    node: {
        excerpt: string,
        frontmatter: {
            path: string,
            title: string,
            date: string,
            featureImage: string,
        }
    }
}

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
              featuredImage {
                absolutePath
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        {data.allMarkdownRemark.edges.map((edge: Edge, idx: number) => (
            <li key={idx}>{ edge.node.frontmatter.title }</li>
        ))}
      </aside>
    </>
  )
}

export default Archive
