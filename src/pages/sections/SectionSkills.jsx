import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import GridItem from "components/MaterialUI/Grid/GridItem";
import CustomLinearProgress from "components/MaterialUI/CustomLinearProgress/CustomLinearProgress";

// resources
import Strings from "components/strings";
// style classes
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle";

class SectionSkills extends Component {
  constructor(props) {
    super(props)
    this.state = { completed: 0 }

    this.progressRef = React.createRef()
    this.isInViewport = this.isInViewport.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (this.state.completed === 0 && this.isInViewport())
        this.timer = setTimeout(() => this.progress(5), 50)
    }, false)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({ completed: 100 })
    } else {
      this.setState({ completed })
      this.timer = setTimeout(() => this.progress(completed + 5), 50)
    }
  }

  isInViewport() {
    if (this.progressRef && this.progressRef.current) {
      const bounding = this.progressRef.current.getBoundingClientRect();
      return bounding.top <= (window.innerHeight || document.documentElement.clientHeight);
    }
    return false;
  }

  render() {
    const colors = ['success', 'info', 'warning', 'danger'];
    const { classes } = this.props;

    return (
      <div id="skills" className={classes.sections}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <div className={classes.textCenter}>
              <h3>{Strings.skillsLabel}</h3>
              <h4>{Strings.skillsSubLabel}</h4>
            </div>
          </GridContainer>
          <div id="progress" ref={this.progressRef}>
            {
              Strings.skills.map((type, indexSkill) =>
                <GridContainer key={indexSkill}>
                  <GridItem xs={12}>
                    <div className={classes.title}>
                      <h4>{type.type}</h4>
                    </div>
                  </GridItem>
                  {
                    type.list.map((elem, index) => (
                      <GridItem key={index} xs={6} sm={4} md={3} lg={2}>
                        {elem.title}<span className="percent">{` (${Math.min(this.state.completed, elem.level)}%)`}</span>
                        <CustomLinearProgress variant="determinate" color={colors[indexSkill]} value={Math.min(this.state.completed, elem.level)} />
                      </GridItem>
                    ))
                  }
                </GridContainer>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(basicsStyle)(SectionSkills)
