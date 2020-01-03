import { container, title } from "assets/jss/material-kit-react";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch";

const basicsStyle = {
  sections: {
    padding: "15px 0 15px"  
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  textCenter: {
    textAlign: "center"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
