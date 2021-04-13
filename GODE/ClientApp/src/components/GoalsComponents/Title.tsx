import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleclass: {
            fontSize: '75px',
            fontFamily: 'Poppins',
            fontWeight: 800,
            color: 'black',
            textAlign: 'center',
            paddingTop: '15px'
        },
        time: {
            fontSize: '30px',
            fontFamily: 'Poppins',
            fontWeight: 800,
            color: 'black',
            // paddingTop: '10px'
            paddingLeft: '655px',
            marginBottom: '20px'
        }
    }));

interface Props {
    
}

export default function Title({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div className = {classes.titleclass}>
            Goals &#8594; Tasks &#8594; Time to solve
            <div className = {classes.time}>
                Estimated Time &nbsp; &nbsp; &nbsp; &nbsp; Progress
            </div>
        </div>
    )
}
