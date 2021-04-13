import React, { ReactElement } from 'react';
import NavMenu from './components/DailySummaryComponents/NavMenu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import BgImage from "./assets/GODE-dailysummary.png";
import Title from './components/DailySummaryComponents/Title';
import Details from './components/DailySummaryComponents/Details';
import Productivity from './components/DailySummaryComponents/Productivity';
import Reminder from './components/DailySummaryComponents/Reminder';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#080201",
    },
    bgImage: {
      background: `url(${BgImage})`,
      backgroundSize: "100%",
      minHeight: "calc(100vh - 70px)",
      
    },
  })
);



interface Props {
    
}


export default function DailySummary({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div>
            <div>
                <NavMenu /> 
            </div>
            <div className = {classes.bgImage}>
                <Title />
                <Details />
                <Productivity />
                <Reminder />
            </div>
        </div>
    )
}