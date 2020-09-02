/**

Purpose of this file: 
control what is created/registered in the Gatsby App. 

What it does: 
creates a new page at an arbitrarily code, and we'll point it to a 
React component that will load up with the given data. 
For example, when creating different types of pages. 
In essence, we're going to export a createPages method that performs
the building of the page. 

When it runs: 
When site is built 

The Arguments:
'actions' and 'graphql' are automatically passed into the function by 
Gatsby's build tool

Path module:
is part of node, so does not need to be installed. 
Generates the path based on the root of the project

**/

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const {createPage} = actions;
    const postTemplate = path.resolve('./src/posts/templates/post.tsx');

    return graphql(`{
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
                    html
                }
            }
        }
    }`)
    .then(res => {
        if (res.errors) {
            return Promise.reject(res.errors);
        };

        res.data.allMarkdownRemark.edges.forEach( ({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    });
}