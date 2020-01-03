import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import Badge from "components/MaterialUI/Badge/Badge";

// resources
import Strings from "components/strings";
// styles
import SocialStyle from "assets/jss/material-kit-react/views/componentsSections/socialStyle";

const SectionServices = ({ classes }) => {
  const colors = ["success", "info", "warning", "danger", "primary", "rose"];
  const skills = classNames(classes.textCenter, classes.typo, classes.boxSocial);

  return (
    <div id="social" className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <GridContainer justify="center">
            <div className={classes.textCenter}>
              <h3>{Strings.socialLabel}</h3>
              <h4>{Strings.socialSubLabel}</h4>
            </div>
          </GridContainer>
          <GridContainer>
            <div className={skills}>
              {Strings.socialSkills.map((text, index) => (
                <div key={index} className={classes.skillsBadge}>
                  <Badge color={colors[index]}>
                    <p className={classes.skills}>
                      {text}
                    </p>
                  </Badge>
                </div>
              ))}
            </div>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}

export default withStyles(SocialStyle)(SectionServices)
