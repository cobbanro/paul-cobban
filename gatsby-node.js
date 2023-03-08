const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions

    return graphql(
        `
        {
            allContentfulPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
        
        `
    ).then((result) => {
        if(result.errors) {
            console.log("Error with contentful data", result.errors)
        }
    
        const postTemplate = path.resolve("./src/pages/posts/post.js")

        result.data.allContentfulPost.edges.forEach(post => {
            createPage({
                path: `/posts/${post.node.slug}/`,
                component: slash(postTemplate),
                context: {
                    slug: post.node.slug
                }
            })
        })
    }).catch(error => console.log("Error with contentful data", error))
}
