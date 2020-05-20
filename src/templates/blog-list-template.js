import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

export default class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <Head title="Blog"/>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}>
              <h3><Link to={`${node.frontmatter.type}${node.fields.slug}`}>{title}</Link></h3>
              </div>
        })}
        {!isFirst && (
        <Link to={`blog/${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={`blog/${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        filter:{frontmatter:{type:{eq:"blog"}}}
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            type
          }
        }
      }
    }
  }
`