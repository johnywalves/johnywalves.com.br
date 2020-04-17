import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/MaterialUI/Header/Header";
import Footer from "components/MaterialUI/Footer/Footer";
import HeaderLinks from "components/MaterialUI/Header/HeaderLinks";
import Parallax from "components/MaterialUI/Parallax/Parallax";
import SEO from "components/seo";

// sections for this page
import SectionDownload from "./sections/SectionDownload";
import SectionDescription from "./sections/SectionDescription";
import SectionSkills from "./sections/SectionSkills";
import SectionLanguage from "./sections/SectionLanguage";
import SectionSocial from "./sections/SectionSocial";
import SectionPosts from "./sections/SectionPosts";
import SectionHistory from "./sections/SectionHistory";
import SectionContact from "./sections/SectionContact";
//import SectionProjects from "./sections/SectionProjects";

// styles
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage";
import imageHeader from "assets/images/header-bg.jpg";
import "assets/scss/material-kit-react.css?v=1.3.0";
import "assets/Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons.css";

const VitaePage = props => {

    const { classes, ...rest } = props;
    const [toggle, SetToggle] = useState(false);

    const {
        site: { siteMetadata: { title } }
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    position
                    description
                }
            }
        }
    `)

    useEffect(() => { }, [toggle])

    return (<div >
        <SEO title="Sobre" />
        <Header color="transparent"
            brand={title}
            rightLinks={<HeaderLinks updateLanguage={() => SetToggle(!toggle)} />}
            fixed
            changeColorOnScroll={{ height: 150, color: "white" }}
            {...rest}
        />
        <Parallax small filter image={imageHeader} />
        <div className={classNames(classes.main, classes.mainRaised)} >
            <SectionDescription />
            <SectionDownload />
            <SectionPosts />
            <SectionLanguage />
            <SectionSkills />
            <SectionSocial />
            <SectionHistory />
            <SectionContact />
        </div>
        <Footer />
    </div >
    );
}

export default withStyles(profilePageStyle)(VitaePage)