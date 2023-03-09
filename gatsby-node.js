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
                        title
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
                path: `/posts/${post.node.title}/`,
                component: slash(postTemplate),
                context: {
                    title: post.node.title
                }
            })
        })
    }).catch(error => console.log("Error with contentful data", error))
}