import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';

// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer"
// resources
import Strings from "components/strings"
// styles
import historyStyle from "assets/jss/material-kit-react/views/componentsSections/historyStyle"

import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

const SectionHistory = ({ classes }) => (
  <div id="history" className={classes.section}>
    <div className={classes.container}>
      <GridContainer justify="center">
        <div className={classes.textCenter}>
          <h3>{Strings.timelimeLabel}</h3>
          <h4>{Strings.timelimeSubLabel}</h4>
        </div>
      </GridContainer>
      <VerticalTimeline>
        {
          Strings.timelime.map((elem, index) =>
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${elem.type}`}
              date={elem.date}
              iconStyle={{ background: (elem.type === 'work' ? '#00acc1' : '#ff9800'), color: '#EEE' }}
              icon={(elem.type === 'work' ? <WorkIcon /> : <SchoolIcon />)}
            >
              <h3 className="vertical-timeline-element-title">{elem.title}{elem.status && ` (${elem.status})`}</h3>
              <h4 className="vertical-timeline-element-subtitle">{elem.institution}</h4>
              {elem.description && elem.description.map((text, index) => <p key={index}>{text}</p>)}
              {elem.awards && elem.awards.map((text, index) => <div key={index} className={classes.award}>
                <EmojiEventsOutlinedIcon className={classes.awardIcon} />
                <p key={index} className={classes.awardText}>{text}</p>
              </div>)}
              {elem.production && elem.production.map((prod, index) =>
                <p key={index}><a href={prod.file} target="_blank" rel="noopener noreferrer">{prod.title}</a></p>
              )}
            </VerticalTimelineElement>
          )
        }
        <VerticalTimelineElement
          iconStyle={{ background: '#4caf50', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline >
    </div>
  </div>
)

export default withStyles(historyStyle)(SectionHistory)
