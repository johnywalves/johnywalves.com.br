import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
// core components
import Button from "components/MaterialUI/CustomButtons/Button";
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import GridItem from "components/MaterialUI/Grid/GridItem";
import Card from "components/MaterialUI/Card/Card";
import CardHeader from "components/MaterialUI/Card/CardHeader";
import CardBody from "components/MaterialUI/Card/CardBody";
// styles
import projectsStyle from "assets/jss/material-kit-react/views/componentsSections/projectsStyle";
// resources
import Strings from "components/strings";

const Transition = React.forwardRef((props, ref) => <Slide direction="down" {...props} ref={ref} />);

const SectionProjects = props => {

  const { classes } = props;

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const navCardHeader = classNames(classes.imgRounded, classes.cardHeader);
  const navCardBody = classNames(classes.cardBody, classes.textCenter);

  const [state, setState] = useState({ modal: Strings.projects.map(() => false) });

  const { project1, project2, project3 } = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "daisy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      project2: file(relativePath: { eq: "treasure-map.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      project3: file(relativePath: { eq: "steamuniverse.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const listImages = [project1, project2, project3];

  const handleClickOpen = modal => {
    setState({ ...state, modal: Strings.projects.map((p, i) => modal === i) })
  }

  const handleClose = () => {
    setState({ ...state, modal: Strings.projects.map(() => false) })
  }

  return (
    <div id="projects" className={classes.section} >
      <div className={classes.container}>
        <GridContainer justify="center">
          <div className={classes.textCenter}>
            <h3>{Strings.projectsLabel}</h3>
            <h4>{Strings.projectsSubLabel}</h4>
          </div>
        </GridContainer>
        <GridContainer justify="center">
          {Strings.projects.map((project, index) => (
            <GridItem key={index} xs={12} sm={12} md={4}>
              <Card>
                <div className={classes.cardProject}>
                  <CardHeader className={navCardHeader}>
                    <Img
                      fluid={{ ...listImages[index].childImageSharp.fluid, aspectRatio: 1.5 }}
                      className={navImageClasses}
                      alt="..."
                    />
                  </CardHeader>
                  <CardBody className={navCardBody} justify="center">
                    <h4 style={{ marginBottom: 0 }} >{project.title}</h4>
                    <p>{project.tech}</p>
                    <Button color="primary" onClick={() => handleClickOpen(index)} style={{ marginBottom: '20px' }} >
                      {Strings.projectsTerms.detail}
                    </Button>
                  </CardBody>
                </div>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
        {Strings.projects.map((project, index) => (
          <Dialog
            key={index}
            classes={{
              root: classes.center,
              paper: classes.modal
            }}
            open={state.modal[index]}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => handleClose()}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => handleClose()}
              >
                <Close className={classes.modalClose} />
              </IconButton>
              <h4 className={classes.modalTitle}>{project.title}</h4>
              <p>{project.tech}</p>
            </DialogTitle>
            <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
              {project.description.map((text, index) => (<p key={index}>{text}</p>))}
              <div className={classes.textCenter} style={{ marginTop: '20px' }} >
                {project.date &&
                  <p style={{ marginBottom: 0 }}>{`${Strings.projectsTerms.date}: ${project.date}`}</p>
                }
                {project.fullTech &&
                  <p style={{ marginBottom: 0 }}>{`${Strings.projectsTerms.tools}: ${project.fullTech}`}</p>
                }
                {project.tech &&
                  <p style={{ marginBottom: 0 }}>{`${Strings.projectsTerms.category}: ${project.tech}`}</p>
                }
              </div>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
              {project.sourceCode &&
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                  <Button color="transparent" simple>{Strings.projectsTerms.sourceCode}</Button>
                </a>
              }
              {project.article &&
                <a href={project.article} target="_blank" rel="noopener noreferrer">
                  <Button color="transparent" simple>{Strings.projectsTerms.article}</Button>
                </a>
              }
              {project.view &&
                <a href={project.view} target="_blank" rel="noopener noreferrer">
                  <Button color="transparent" simple>{Strings.projectsTerms.view}</Button>
                </a>
              }
              <Button color="danger" simple onClick={() => handleClose()}>
                {Strings.projectsTerms.close}
              </Button>
            </DialogActions>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

export default withStyles(projectsStyle)(SectionProjects);
