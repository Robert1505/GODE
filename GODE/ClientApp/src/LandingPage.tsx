import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import Background from './assets/GODE-landingPage.png';
import NavMenu from './components/LandingPageComponents/NavMenu';
import Title from './components/LandingPageComponents/Title';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          backgroundColor: "#080201",
        },
        background: {
          maxHeight: '100vh',
          minHeight: '100vh',
          minWidth: '100vw',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex'
        },
        nav: {
          position: 'absolute',
          zIndex: 99,
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
        },
        title: {
          position: 'absolute',
          zIndex: 99,
          left: '0'        
        }
    }));

interface Props{

}

export default function Home({}: Props): ReactElement {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className = {classes.background}>
          <div className = {classes.nav}>
            <NavMenu />
          </div>
          <img src = {Background} alt = ""/>
          <div className = {classes.title}>
            <Title />
          </div>
        </div>
    </div>
  )
}
