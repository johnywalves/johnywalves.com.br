import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
// nodejs library that concatenates classes
import classNames from "classnames"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Button from "components/MaterialUI/CustomButtons/Button"
import GridContainer from "components/MaterialUI/Grid/GridContainer"
import GridItem from "components/MaterialUI/Grid/GridItem"
import Card from "components/MaterialUI/Card/Card"
import CardHeader from "components/MaterialUI/Card/CardHeader"
import CardBody from "components/MaterialUI/Card/CardBody"

// resources
import Strings from "components/strings"
// styles
import projectsStyle from "assets/jss/material-kit-react/views/componentsSections/projectsStyle"

const SectionPosts = ({ classes }) => {

  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {highlight: {eq: true}}}) {
        edges {
          node {
            frontmatter {
                date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
                title
                tags
                description
                coverImage
            }
            timeToRead
            fields {
                slug
            }
          }
        }
      }
    }
  `)

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery, classes.imgProject)
  const navCardHeader = classNames(classes.imgRounded, classes.cardHeader)
  const navCardBody = classNames(classes.cardBody, classes.textCenter)

  return (
    <div id="posts" className={classes.section} >
      <div className={classes.container}>
        <GridContainer justify="center">
          <div className={classes.textCenter}>
            <h3>{Strings.posts.label}</h3>
            <h4>{Strings.posts.subLabel}{" "}<Link to={Strings.pages.laboratory.link}>{Strings.pages.laboratory.title}</Link></h4>
          </div>
        </GridContainer>
        <GridContainer justify="center">
          {edges.map(({ node }, index) => (
            <GridItem key={index} xs={12} sm={12} md={4}>
              <Card>
                <div className={classes.cardProject}>
                  <CardHeader className={navCardHeader}>
                    <div className={navImageClasses} style={{ backgroundImage: `url(${node.frontmatter.coverImage})` }} />
                  </CardHeader>
                  <CardBody className={navCardBody} justify="center">
                    <h4 style={{ marginBottom: 0 }} >{node.frontmatter.title}</h4>
                    <p>{node.frontmatter.description}</p>
                    <Link to={node.fields.slug}>
                      <Button color="primary" style={{ marginBottom: '20px' }}>
                        {Strings.posts.detail}
                      </Button>
                    </Link>
                  </CardBody>
                </div>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(projectsStyle)(SectionPosts);
