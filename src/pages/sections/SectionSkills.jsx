import React, { useEffect, useState, useRef } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/MaterialUI/Grid/GridContainer";
import GridItem from "components/MaterialUI/Grid/GridItem";
import CustomLinearProgress from "components/MaterialUI/CustomLinearProgress/CustomLinearProgress";

// resources
import Strings from "components/strings";
// style classes
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle";

const SectionSkills = ({ classes }) => {

  const colors = ["success", "info", "warning", "danger"];

  const progressRef = useRef();

  const [startedLoad, setStaredLoad] = useState(false);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (startedLoad) {
      return true;
    }

    const isInViewport = () => {
      if (progressRef.current) {
        const bounding = progressRef.current.getBoundingClientRect();
        return bounding.top <= (window.innerHeight || document.documentElement.clientHeight);
      }
      return false;
    }

    const progress = loaded => {
      if (loaded > 1) {
        setCompleted(1);
      } else {
        setCompleted(loaded);
        setTimeout(() => progress(loaded + .1), 100)
      }
    }

    const handleScroll = () => {
      if (!startedLoad && isInViewport()) {
        setStaredLoad(true);
        setTimeout(() => progress(.1), 50)
      }
    };

    window.addEventListener("scroll", handleScroll, false);
    return () => window.removeEventListener("scroll", handleScroll, false);;
  }, [startedLoad]);

  return (
    <div id="skills" className={classes.sections}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <div className={classes.textCenter}>
            <h3>{Strings.skillsLabel}</h3>
            <h4>{Strings.skillsSubLabel}</h4>
          </div>
        </GridContainer>
        <div id="progress" ref={progressRef}>
          {Strings.skills.map((type, i) =>
            <GridContainer key={i}>
              <GridItem xs={12}>
                <div className={classes.title}>
                  <h4>{type.type}</h4>
                </div>
              </GridItem>
              {type.list.map((elem, index) => (
                <GridItem key={index} xs={6} sm={4} md={3} lg={2}>
                  {elem.title}<span className="percent">{` (${Math.round(completed * elem.level)}%)`}</span>
                  <CustomLinearProgress variant="determinate" color={colors[i]} value={Math.round(completed * elem.level)} />
                </GridItem>
              ))}
            </GridContainer>
          )}
        </div>
      </div>
    </div>
  )
}

export default withStyles(basicsStyle)(SectionSkills)
