import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slog
            publishedDate(formatString: "MMMM Do, YYYY, h:mm:ss a")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, i) => (
          <li key={i} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slog}`}>
              <h2>{edge.node.title}</h2>
              {/* <p>{edge.node.excerpt}</p> */}
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
export default BlogPage
