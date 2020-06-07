import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import GridItem from "components/MaterialUI/Grid/GridItem";
import Card from "components/MaterialUI/Card/Card";
import CardHeader from "components/MaterialUI/Card/CardHeader";
import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle";

// resources
import Strings from "components/strings";
import SectionSocialMedia from "./SectionSocialMedia";
import SectionMail from "./SectionMail";

const SectionContact = ({ classes }) => (
  <div id="contact" className={classes.section}>
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6} lg={6}>
          <Card>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h3>{Strings.contact.label}</h3>
              <h4>{Strings.contact.socialMedia}</h4>
              <SectionSocialMedia className={classes.buttomSocialMedia} />
              <h5>{Strings.contact.or}</h5>
              <h4>{Strings.contact.emailInstead}</h4>
              <SectionMail className={classes.buttomSocialMedia} />
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  </div>
);

export default withStyles(loginStyle)(SectionContact);
