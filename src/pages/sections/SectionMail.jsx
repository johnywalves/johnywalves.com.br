import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "components/MaterialUI/CustomButtons/Button";
// styles
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage";
import Icons from "components/SocialLinks/icons";

const SectionSocialMedia = props => {
    const { classes, className } = props;
    const classButtom = classNames(classes.SocialMediaRealce, classes.socialMail, className)
    return (
        <div>
            <Button
                justIcon
                link
                href={"mailto:contato@johnywalves.com.br"}
                target="_blank"
                className={classButtom}
            >
                <Icons.MailSend />
            </Button>
        </div>
    )
}

export default withStyles(profilePageStyle)(SectionSocialMedia);