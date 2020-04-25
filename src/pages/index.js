import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello World.</h1>
            <h2>How are you?</h2>
            <p>Need to talk? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage