import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// sections
import SectionServices from "./SectionServices";
// styles
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage";

const SectionProducts = ({ classes }) => (
    <div id="description" className={classes.container}>
        <SectionServices />
    </div>
)

export default withStyles(profilePageStyle)(SectionProducts);