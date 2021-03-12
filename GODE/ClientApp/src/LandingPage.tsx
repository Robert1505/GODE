import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import NavMenu from './components/LandingPageComponents/NavMenu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          backgroundColor: "#080201"
        },
        title: {
          fontSize: "70px",
          color: "#F08700",
          fontFamily: 'RocknRoll',
          textAlign: 'center',
          paddingBottom: '70px',
          paddingTop: '100px'
        },
        subtitle:{
          fontSize: '30px',
          fontFamily: "Arimo",
          color: "#F08700",
          margin: '0px 100px',
          textAlign: 'center'
        },
        text: {
          fontSize: '15px',
          fontFamily: "Arimo",
          color: "#F08700",
          margin: '100px 100px',
          textAlign: 'center'
        }
    }));
interface Props{

}


export default function Home({}: Props): ReactElement {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <NavMenu />
        <div className = {classes.title}>
           GODE
        </div>
        <div className = {classes.subtitle}>
          GODE is an application where you can destroy your goals! Set your goals, set your time and try to beat that time!
        </div>
        <div className = {classes.text}>
          Thank you for choosing GODE!
        </div>
    </div>
  )
}
