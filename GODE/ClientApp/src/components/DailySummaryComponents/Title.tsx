import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleclass: {
            fontSize: '75px',
            fontFamily: 'Poppins',
            fontWeight: 800,
            color: 'black',
            paddingLeft: '70px',
            paddingTop: '25px',
            paddingBottom: '35px'
        },
    }));


interface Props {
    
}

export default function Title({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div className = {classes.titleclass}>
            Daily summary
        </div>
    )
}
