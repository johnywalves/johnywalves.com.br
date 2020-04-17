import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer"
import GridItem from "components/MaterialUI/Grid/GridItem"
import Card from "components/MaterialUI/Card/Card"
import CardHeader from "components/MaterialUI/Card/CardHeader"

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle"

// resources
import Strings from "components/strings"

import SectionSocialMedia from "./SectionSocialMedia"
import SectionMail from "./SectionMail"

class SectionContact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      requested: false,
      accepted: false,
      name: '',
      email: '',
      phone: '',
      message: ''
    }

    this.sendMessage = this.sendMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'name':
        this.setState({ ...this.state, name: event.target.value })
        break
      case 'email':
        this.setState({ ...this.state, email: event.target.value })
        break
      case 'message':
        this.setState({ ...this.state, message: event.target.value })
        break
      case 'phone':
        this.setState({ ...this.state, phone: event.target.value })
        break
      default:
        break
    }
  }

  sendMessage() {
    this.setState({ ...this.state, requested: true, accepted: false })

    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' }
    }

    let url = `/mensageiro?name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`
    if (this.state.phone && this.state.phone !== '')
      url = url + `&phone=${this.state.phone}`

    fetch(url, requestOptions)
      .then(() => this.setState({ ...this.state, requested: false, accepted: true }))
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="contact" className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Card>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h3>{Strings.contact.label}</h3>
                  <h4>{Strings.contact.socialMedia}</h4>
                  <SectionSocialMedia className={classes.buttomSocialMedia} />
                  <h5>{Strings.contact.or}</h5>
                  <h4>{Strings.contact.emailInstead}</h4>
                  <SectionMail className={classes.buttomSocialMedia} />
                </CardHeader>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyle)(SectionContact);
