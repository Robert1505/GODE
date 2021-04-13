import React, { ReactElement, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getProgress } from '../../services/progressService';
import { Progress } from '../../interfaces/Progress';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        details: {
            fontSize: '50px',
            fontFamily: 'Poppins',
            fontWeight: 800,
            color: 'black',
            paddingLeft: '70px'
        },
    }));

interface Props {
    
}


export default function Details({}: Props): ReactElement {

    const classes = useStyles();

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let dateTime = new Date();
        getProgress().then((data: Progress[]) => {
          data.forEach((progress : Progress) => {
           if(progress.date === dateTime){
               setProgress(progress.minutes);
           }
          });
        });
      }, []);

    return (
        <div>
            <div className = {classes.details}>
                Goals solved:
            </div>
            <div className = {classes.details}>
                Tasks solved:
            </div>
            <div className = {classes.details}>
                Progress in hours: {progress}
            </div>
            <div className = {classes.details}>
                Hours of work:
            </div>
        </div>
    )
}
