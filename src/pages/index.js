import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head";
import indexStyles from '../components/index.module.scss';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            blog: allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, limit: 2, sort: {fields: [frontmatter___date], order: DESC}) {
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
            event: allMarkdownRemark(filter: {frontmatter: {type: {eq: "calendar"}}}, limit: 1, sort: {fields: [frontmatter___date], order: DESC}) {
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
    `)
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Home page</h1>
            <p>This is my home page.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar quam massa. Etiam consequat quam purus, sit amet scelerisque sem tincidunt vitae.</p> 
            <p>Pellentesque sed molestie lorem. Pellentesque odio dolor, convallis quis erat a, molestie laoreet justo. Pellentesque maximus vulputate porttitor. Duis eget dictum massa. Ut porta vitae metus id sodales.</p>
            <p>Duis vitae justo sem. Curabitur eros leo, dignissim non hendrerit vitae, consectetur ac nisl. Vestibulum malesuada tristique lorem sed congue. Maecenas vel tortor nulla. Pellentesque quis blandit ipsum. Cras lobortis nunc a finibus sollicitudin. Cras et arcu tempor, placerat metus vitae, lobortis est.</p>
            <p>Sed ultricies ipsum nisi, nec pharetra nibh mollis nec. In hac habitasse platea dictumst.</p>
            <hr />
            <h2>Latest from Markdown content</h2>
            <div className={indexStyles.flexParent}>
                <div className={indexStyles.flexChild}>
                    <h4>Latest Blog Post</h4>
                    {data.blog.edges.map((edge) => {
                        return (
                            <Link to={`${edge.node.frontmatter.type}/${edge.node.fields.slug}`}>
                                <h5>{edge.node.frontmatter.title}</h5>
                            </Link>
                        )
                    })}
                </div>
                <div className={indexStyles.flexChild}>
                    <h4>Latest Event</h4>
                    {data.event.edges.map((edge) => {
                        return (
                            <Link to={`${edge.node.frontmatter.type}/${edge.node.fields.slug}`}>
                                <h5>{edge.node.frontmatter.title}</h5>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage