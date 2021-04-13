import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontSize: '50px',
            fontFamily: 'Poppins',
            fontWeight: 800,
            color: 'black',
            textAlign: 'center',
            paddingTop: '30px'
        },
        root: {
            '& > *': {
              margin: theme.spacing(1),
              width: '25ch',
            },
            '& .MuiInputBase-input': {
                fontWeight: '800',
                textAlign: 'center',
                fontSize: '20px'
            }
        },
        center: {
            textAlign: 'center'
        },
    }));

interface Props {
    
}

export default function Productivity({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div>
            <div className = {classes.center}>
                <div className = {classes.title}>
                    Today I was
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="" />
                </form>
            </div>
        </div>
    )
}
