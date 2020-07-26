import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
import ListAlt from "@material-ui/icons/ListAlt"
import Computer from "@material-ui/icons/Computer"
import Memory from "@material-ui/icons/Memory"
// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer"
import GridItem from "components/MaterialUI/Grid/GridItem"
import InfoArea from "components/MaterialUI/InfoArea/InfoArea"

// resources
import Strings from "components/strings"
// styles
import productStyle from "assets/jss/material-kit-react/views/componentsSections/productStyle";

const SectionServices = ({ classes }) => {
  const icons = [ListAlt, Computer, Memory]
  return (
    <div id="services" className={classes.section}>
      <GridContainer>
        {Strings.services.map((service, index) => (
          <GridItem key={index} xs={12} sm={12} md={4}>
            <InfoArea style={{ marginRight: 0 }}
              title={service.title}
              description={service.description}
              icon={icons[index]}
              iconColor={service.color}
              vertical
            />
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default withStyles(productStyle)(SectionServices)
