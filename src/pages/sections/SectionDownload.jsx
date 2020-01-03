import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/MaterialUI/CustomButtons/Button";
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import GridItem from "components/MaterialUI/Grid/GridItem";

// resources
import Strings from "components/strings";
import { Download } from "styled-icons/boxicons-solid/Download";
// styles
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage";

const SectionDownload = props => {
    const { classes } = props;
    return (
        <div id="download">
            <div className={classes.container}>
                <GridContainer className={classes.textCenter} justify="center" style={{ marginBottom: '40px', marginTop: '40px' }}>
                    <GridItem xs={12}>
                        {
                            Strings.files.map(({ name, file }, index) =>
                                <Button key={index}
                                    color="primary"
                                    href={file}
                                    target="_blank"
                                    size="lg"
                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                >
                                    <Download /> {name}
                                </Button>
                            )
                        }
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}

export default withStyles(profilePageStyle)(SectionDownload);