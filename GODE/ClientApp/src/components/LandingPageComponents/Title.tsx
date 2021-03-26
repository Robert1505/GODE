import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: '#000000'
        },
        title: {
            fontSize: '130px',
            color: 'white',
            fontFamily: 'Poppins',
            fontWeight: 800
        },
        subtitle: {
            fontSize: '28px',
            color: '#91eee1',
            fontFamily: 'Poppins',
            fontWeight: 500
        }
    }));

interface Props {
    
}

export default function Title({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div className = {classes.root}>
            <div className = {classes.title}>
                GODE
            </div>
            <div className = {classes.subtitle}>
                Love the process, not the result!
            </div>
        </div>
    )
}
