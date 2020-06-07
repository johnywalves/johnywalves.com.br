import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "components/MaterialUI/CustomButtons/Button";
// resources
import Strings from "components/strings";
// styles
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage";
import Icons from "components/SocialLinks/icons";

const SectionSocialMedia = props => {
    const { classes, className } = props;
    const classButtom = classNames(classes.SocialMediaRealce, className)
    return (
        <div>
            <Button
                justIcon
                link
                href="https://github.com/johnywalves"
                target="_blank"
                className={classButtom}
                rel="noreferrer"
                aria-label="GitHub"
            >
                <Icons.Github />
            </Button>
            <Button
                justIcon
                link
                href="https://www.linkedin.com/in/johnywalves"
                target="_blank"
                className={classButtom}
                rel="noreferrer"
                aria-label="LinkedIn"
            >
                <Icons.Linkedin />
            </Button>
            <Button
                justIcon
                link
                href="https://instagram.com/johnywalves"
                target="_blank"
                className={classButtom}
                rel="noreferrer"
                aria-label="Instagram"
            >
                <Icons.Instagram />
            </Button>
            <Button
                justIcon
                link
                href="https://twitter.com/johnywalves"
                target="_blank"
                className={classButtom}
                rel="noreferrer"
                aria-label="Twitter"
            >
                <Icons.Twitter />
            </Button>
            <Button
                justIcon
                link
                href={Strings.lattes}
                target="_blank"
                className={classButtom}
                rel="noreferrer"
                aria-label="Lattes"
            >
                <Icons.University />
            </Button>
        </div>
    )
}

export default withStyles(profilePageStyle)(SectionSocialMedia);