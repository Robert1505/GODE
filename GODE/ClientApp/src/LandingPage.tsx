import React, { ReactElement } from 'react';
import NavMenu from './components/LandingPageComponents/NavMenu';
import Title from './components/LandingPageComponents/Title';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import BgImage from "./assets/GODE-landingPage.png";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          backgroundColor: "#080201",
        },
        nav: {
          position: 'absolute',
          zIndex: 99,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        bgImage: {
          background: `url(${BgImage})`,
          backgroundSize: "100%",
          minHeight: "100vh",
          display: 'flex',
          alignItems: "center"
        },
    }));

interface Props{

}

export default function Home({}: Props): ReactElement {

  const classes = useStyles();

  return (
    <div className={classes.root}>
          <div className = {classes.nav}>
            <NavMenu />
          </div>
          <div className = {classes.bgImage}>
            <Title />
          </div>
    </div>
  )
}
