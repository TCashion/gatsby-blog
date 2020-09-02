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
                featuredImage: {
                    absolutePath: string
                }
            }
            html: string
        }
    }
}

export default function Template({ data }: Props) {
    const { markdownRemark } = data;

    return (
        <Layout>
            <SEO title={markdownRemark.frontmatter.title} />
            <div>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <div className="left-content">
                    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
                </div>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            path: {
                eq: $slug
            }
        }) {
            html
            frontmatter {
                title
                date
                path
                featuredImage {
                absolutePath
                }
            }
        }
    }
`