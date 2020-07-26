/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles } from "@material-ui/core";

// @material-ui/icons
import { Favorite } from "@material-ui/icons"

import footerStyle from "assets/jss/material-kit-react/components/footerStyle"

import Strings from "components/strings"

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} {Strings.pages.madeWith}{" "}
          {" "}React{", "}Gatsby{", "}Material-UI{" "}{Strings.pages.and}{" "}
          <Favorite className={classes.icon} />{" "}{Strings.pages.by}{" "}
          <a
            href="https://www.johnywalves.com.br"
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Johny W. Alves
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
