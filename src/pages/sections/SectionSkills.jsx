import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import GridItem from "components/MaterialUI/Grid/GridItem";
import Badge from "components/MaterialUI/Badge/Badge";
// resources
import Strings from "components/strings";
// style classes
import SocialStyle from "assets/jss/material-kit-react/views/componentsSections/socialStyle";

const SectionSkills = ({ classes }) => {

  const colors = ["success", "info", "warning", "danger"]

  return (
    <div id="skills" className={classes.sections}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <div className={classes.textCenter}>
            <h3>{Strings.skillsLabel}</h3>
            <h4>{Strings.skillsSubLabel}</h4>
          </div>
        </GridContainer>
        <div id="progress">
          {Strings.skills.map((type, i) =>
            <GridContainer key={i}>
              <GridItem xs={12}>
                <div className={classes.title}>
                  <h4>{type.type}</h4>
                </div>
              </GridItem>
              {type.list.map((elem, index) => (
                <GridItem key={index} xs={6} sm={4} md={3} lg={2}>
                  <Badge color={colors[i]}>
                    <p className={classes.skills}>
                      {elem.title}
                    </p>
                  </Badge>
                </GridItem>
              ))}
            </GridContainer>
          )}
        </div>
      </div>
    </div>
  )
}

export default withStyles(SocialStyle)(SectionSkills)
