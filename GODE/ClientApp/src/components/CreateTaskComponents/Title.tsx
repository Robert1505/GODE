import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: '#000000'
        },
        title: {
            fontSize: '70px',
            color: 'white',
            fontFamily: 'Poppins',
            fontWeight: 800
        },
    }));

interface Props {
    
}

export default function Title({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div className = {classes.root}>
            <div className = {classes.title}>
                Write your tasks for each goal down below and press the submit button
            </div>
        </div>
    )
}
