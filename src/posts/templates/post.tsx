import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql } from 'gatsby';

interface Props {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string
                date: string
                featuredImage: string
            }
            html: string
        }
    }
}

export default function Template({ data }: Props) {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath( $path: String! ) {
        markdownRemark(frontmatter: { path: { eq: $path} }) {
            html
            frontmatter {
                path
                title
                featuredImage {
                    absolutePath
                }
                date
            }
        }
    }
`