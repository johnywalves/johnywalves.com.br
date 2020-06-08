/*eslint-disable*/
import React, { useState, useEffect } from "react";
// @material-ui/icons
import { Launch } from "@material-ui/icons";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";
import { Link } from "gatsby";

// resources
import Strings from "components/strings";
import brazilian from "assets/images/languages/brazilian.png";
import english from "assets/images/languages/english.png";
// styles
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle";

const HeaderLinks = ({ classes, updateLanguage }) => {

  const typeEnglish = {
    lang: 'en',
    icon: (<img alt="..." src={english} style={{ marginRight: '10px' }} />),
    term: 'ENGLISH'
  }
  const typeBrazilian = {
    lang: 'br',
    icon: (<img alt="..." src={brazilian} style={{ marginRight: '10px' }} />),
    term: 'PORTUGUÊS (BRASIL)'
  }

  const [load, setLoad] = useState(false);
  const [lang, setLanguage] = useState(typeBrazilian.lang);
  const [icon, setIcon] = useState(typeBrazilian.icon);
  const [term, setTerm] = useState(typeBrazilian.term);

  useEffect(() => {

    if (!load) {
      let language = localStorage.getItem('language');
      if ('en,br'.split(',').includes(language)) {
        setLanguage(language);
      }
      setLoad(true);
    } else {
      localStorage.setItem('language', lang);
      if (lang === 'br') {
        setLanguage(typeBrazilian.lang);
        setIcon(typeBrazilian.icon);
        setTerm(typeBrazilian.term);
      } else {
        setLanguage(typeEnglish.lang);
        setIcon(typeEnglish.icon);
        setTerm(typeEnglish.term);
      }
    }

    Strings.setLanguage(lang);
    updateLanguage();
  }, [load, setLoad, lang, setLanguage]);

  const moveSector = e => {
    window.scrollTo({
      top: document.querySelector(e.target.getAttribute("link")).offsetTop + document.querySelector("header").clientHeight * 4,
      behavior: "smooth"
    });
  }

  return (
    <List className={classes.list}>
      {Strings.pages.list.map(({ link, icon, title }, index) => (
        <ListItem className={classes.listItem} key={index}>
          {icon ?
            <Link
              to={link}
              className={classes.navLink}
              cover
              duration={0.6}
              direction="left"
              bg="var(--background)"
            >
              <Launch className={classes.icons} /> {title}
            </Link>
            :
            <p
              link={link}
              color="transparent"
              className={classes.navLink}
              onClick={moveSector}
            >
              {title}
            </p>
          }
        </ListItem>)
      )}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={term}
          buttonIcon={icon}
          buttonProps={{
            className: classes.navLinkFlag,
            color: "transparent"
          }}
          dropdownList={[
            <Button color="transparent" className={classes.navLinkFlag} onClick={() => setLanguage('en')}>
              <img alt="English" src={english} style={{ marginRight: '10px' }} />English
             </Button>,
            <Button color="transparent" className={classes.navLinkFlag} onClick={() => setLanguage('br')} >
              <img alt="Português (Brasil)" src={brazilian} style={{ marginRight: '10px' }} />Português (Brasil)
            </Button>
          ]}
        />
      </ListItem>
    </List>
  );
}


export default withStyles(headerLinksStyle)(HeaderLinks)