import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

interface Edge {
  node: {
      excerpt: string,
      frontmatter: {
          path: string,
          title: string,
          date: string,
          featuredImage: {
              childImageSharp: {
                  fixed: {
                      src: string
                  }
              }
          },
      }
  }
}

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark (limit: 5 sort: {
        order: DESC
        fields: [frontmatter___date]
      }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
              featuredImage {
                childImageSharp {
                    fixed {
                      src
                    }
                  }
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
        <div className="row">
          <div className="center-content">
            <h2>Archive</h2>
          </div>
          {data.allMarkdownRemark.edges.map((edge: Edge, idx: number) => (
              <div className="row blog-preview" key={ edge.node.frontmatter.path }>
                  <div className="row">
                      <div className="col col-4">
                          <div className="image-cropper">
                              <Link to={ edge.node.frontmatter.path }>
                                  <img 
                                      className="round-img" 
                                      alt={edge.node.frontmatter.title} 
                                      src={edge.node.frontmatter.featuredImage.childImageSharp.fixed.src } 
                                  />
                              </Link>
                          </div>
                      </div>
                      <div className="col col-8 post-preview">
                          <h2>{ edge.node.frontmatter.title }</h2>
                          <p>
                              { edge.node.excerpt }
                          </p>
                          <Link to={ edge.node.frontmatter.path }>
                              <button>Read More</button>
                          </Link>
                          <p>Published { edge.node.frontmatter.date }</p>
                      </div>
                  </div>
              </div>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Archive
