import React, { ReactElement } from 'react';
import NavMenu from './components/Page404Components/NavMenu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import avatar from './GODE.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        logo: {
            margin: '85px'
        },
        title:{
            fontFamily: "Poppins",
            margin: '100px 100px',
            fontSize: '50px',
            fontWeight: 700,
        },
        subtitle:{
            fontFamily: "Poppins",
            fontSize: '30px',
            fontWeight: 700,
            margin:"0 190px"
        },
        text1: {
            fontFamily: "Poppins",
            fontSize: '25px',
            fontWeight: 500,
            margin:"50px 175px"
        },
        text2:{
            fontFamily: "Poppins",
            fontSize: '20px',
            fontWeight: 500,
            margin:"50px 110px"
        }
}));

interface Props {
    
}

export default function Page404({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div>
            <NavMenu />
            <div className={classes.root} style = {{color: 'white'}}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img src = {avatar} alt="logo" className = {classes.logo} />
                    </Grid>
                    <Grid item xs={6}>
                        <div className = {classes.title}>
                            AWW ... DON'T CRY.
                        </div>
                        <div className = {classes.subtitle}>
                            It's just a 404 error...
                        </div>
                        <div className = {classes.text1}>
                            Go back with navigation bar!
                        </div>
                        <div className = {classes.text2}>
                            GODE TEAM need to thank you for using our app!
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}