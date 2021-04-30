import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';



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

    return (
        <div>
            <div className = {classes.details}>
                Goals completed:
            </div>
            <div className = {classes.details}>
                Tasks solved:
            </div>
            <div className = {classes.details}>
                Progress in hours:
            </div>
            <div className = {classes.details}>
                Hours of work:
            </div>
        </div>
    )
}
