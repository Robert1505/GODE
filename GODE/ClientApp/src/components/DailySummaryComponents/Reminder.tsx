import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        smalltext: {
            fontSize: '15px',
            position: 'absolute',
            left: 0,
            bottom: 0,
            fontFamily: 'Poppins',
            fontWeight: 800,
        }
    }));


interface Props {
    
}

export default function Reminder({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div>
            <div className = {classes.smalltext}>
                You can post this page at the final of the day to show your friends how productive have you been!
            </div>
        </div>
    )
}
