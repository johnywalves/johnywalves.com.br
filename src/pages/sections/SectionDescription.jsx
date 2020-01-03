import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import GridItem from "components/MaterialUI/Grid/GridItem";

// resources
import Strings from "components/strings";
// sections
import SectionSocialMedia from "./SectionSocialMedia";
// styles
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage";

const SectionDescription = ({ classes }) => {

    const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid, classes.avatar);
    const { avatarImage } = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "johnywalves.jpg" }) {
                childImageSharp {
                    fixed(width: 160, height: 160) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `);

    return (
        <div id="description" className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                        <Img fixed={avatarImage.childImageSharp.fixed} className={imageClasses} />*/}
                        <div className={classes.name}>
                            <h1 className={classes.title}>Johny W. Alves</h1>
                            <h4>{Strings.position}</h4>
                            <SectionSocialMedia />
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
            <div className={classes.description}>
                <h4>{Strings.description}{" "}</h4>
            </div>
        </div>
    )
}

export default withStyles(profilePageStyle)(SectionDescription);