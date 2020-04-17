import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import Close from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import Slide from "@material-ui/core/Slide"
// core components
import Button from "components/MaterialUI/CustomButtons/Button"
import GridContainer from "components/MaterialUI/Grid/GridContainer"
import GridItem from "components/MaterialUI/Grid/GridItem"
import Card from "components/MaterialUI/Card/Card"
import CardHeader from "components/MaterialUI/Card/CardHeader"
import CardBody from "components/MaterialUI/Card/CardBody"

import projectsStyle from "assets/jss/material-kit-react/views/componentsSections/projectsStyle"

// resources
import Strings from "components/strings"

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SectionProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: Strings.projects.map(() => false) };
  }

  handleClickOpen(modal) {
    this.setState({ ...this.state, modal: Strings.projects.map((p, i) => modal === i) })
  }

  handleClose() {
    this.setState({ ...this.state, modal: Strings.projects.map(() => false) })
  }

  render() {
    const { classes } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    const navCardHeader = classNames(classes.imgRounded, classes.cardHeader)
    const navCardBody = classNames(classes.cardBody, classes.textCenter)
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
                      <img
                        alt="..."
                        src={require(`assets/images/projects/${project.image}`)}
                        className={navImageClasses}
                      />
                    </CardHeader>
                    <CardBody className={navCardBody} justify="center">
                      <h4 style={{ marginBottom: 0 }} >{project.title}</h4>
                      <p>{project.tech}</p>
                      <Button color="primary" onClick={() => this.handleClickOpen(index)} style={{ marginBottom: '20px' }} >
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
              open={this.state.modal[index]}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => this.handleClose()}
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
                  onClick={() => this.handleClose()}
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
                <Button color="danger" simple onClick={() => this.handleClose()}>
                  {Strings.projectsTerms.close}
                </Button>
              </DialogActions>
            </Dialog>
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(projectsStyle)(SectionProjects);
