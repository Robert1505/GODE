import React, { ReactElement } from 'react';
import NavMenu from './components/LandingPageComponents/NavMenu';
import Title from './components/LandingPageComponents/Title';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import BgImage from "./assets/GODE-landingPage.png";
import CommonNavBar from './CommonNavbar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          backgroundColor: "#080201",
        },
        bgImage: {
          background: `url(${BgImage})`,
          backgroundSize: "100%",
          minHeight: "calc(100vh - 70px)",
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
          <div className = {classes.bgImage}>
            <Title />
          </div>
    </div>
  )
}
