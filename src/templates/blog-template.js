import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from '../components/blog.module.scss'
import Head from "../components/head"

export default ({ data, pageContext }) => {
    const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
    const nextPage =`/blog/${String(currentPage +1)}`
    const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage - 1)}`

    return (
    <Layout>
        <div className={blogStyles.blog}>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <h3>
                        <Link to={`/posts${node.fields.slug}`}>
                            {node.frontmatter.title} - {node.frontmatter.date}
                        </Link>
                    </h3>
                    <p>{node.excerpt}</p>
                </div>
            ))}

            {/* Pagination Links */}
            <div className={blogStyles.pagination}>
                {!isFirstPage && (
                    <Link to={prevPage} rel="prev">
                        Prev Page
                    </Link>
                )}
                {Array.from({ length: totalPages}, (_, index) => (
                    <Link key={index} to={`/blog/${index === 0 ? '' : index + 1}
                    `}>
                        {index + 1}
                    </Link>
                ))}
                {!isLastPage && (
                    <Link to={nextPage} rel="next">
                        Next Page
                    </Link>
                )}
            </div>
        </div>
    </Layout>
)}

export const query = graphql`
query($skip: Int!, $limit: Int!) {
    allMarkdownRemark ( 
        skip: $skip
        limit: $limit
        sort: { fields: [frontmatter___date], order: DESC }
    ) {
        totalCount
        edges {
            node {
                fields {
                    slug
                }
                id
                frontmatter {
                    title
                    date(formatString:"MMMM Do, YYYY")
                }
                excerpt(pruneLength: 20)
            }
        }
    }
}
`