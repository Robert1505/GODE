import React, { ReactElement } from 'react';
import NavMenu from './components/WeeklySummaryComponents/NavMenu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import BgImage from "./assets/GODE-weeklysummary.png";
import Title from './components/WeeklySummaryComponents/Title';
import Details from './components/WeeklySummaryComponents/Details';



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


export default function WeeklySummary({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div>
            
            <div className = {classes.bgImage}>
                <Title />
                <Details />
            </div>
        </div>
    )
}