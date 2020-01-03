import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import Small from "components/MaterialUI/Typography/Small";

// resources
import Strings from "components/strings";
// styles
import LanguageStyle from "assets/jss/material-kit-react/views/componentsSections/languageStyle";

const SectionServices = ({ classes }) => (
  <div id="social" className={classes.section}>
    <div className={classes.container}>
      <GridContainer justify="center">
        <div className={classes.textCenter}>
          <h3>{Strings.languagesLabel}</h3>
          <h4>{Strings.languagesSubLabel}</h4>
        </div>
      </GridContainer>
      <GridContainer>
        <div className={classes.typo}>
          {Strings.languages.map(({ name, proficiency, image }, index) => (
            <h3 key={index} className={classes.note}>
              <img src={require(`assets/images/languages/${image}`)} alt={name} className={classes.flag} />
              {name}
              <div className={classes.proficiency}>
                <Small>{proficiency}</Small>
              </div>
            </h3>
          ))}
        </div>
      </GridContainer>
    </div >
  </div >
)

export default withStyles(LanguageStyle)(SectionServices)
