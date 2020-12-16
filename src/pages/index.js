import React from "react"
import Layout from "../components/Layout"
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <Layout>

    <h1><FontAwesomeIcon icon={faLaptop} /> Welcome to Gatsbyjs + Bootstrap 4 </h1>
    <hr/>
     <Button variant="dark">Build</Button>
     <Button variant="primary">Awesome</Button>
     <Button variant="warning">Gatsbyjs</Button>
     <Button variant="info">Website</Button>
     <Button variant="success">Blog</Button>
     <Button variant="secondary">Now </Button>
      <hr/>
    <p>Now go build something great. with Bootstrap 4</p>
   
  </Layout>
)

export default IndexPage
