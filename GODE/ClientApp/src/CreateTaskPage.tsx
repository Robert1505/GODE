import React, { ReactElement } from 'react';
import NavMenu from './components/CreateTaskComponents/NavMenu';
import CreateTask from './components/CreateTaskComponents/CreateTask';
import Background from './assets/GODE-createTask.png';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Title from './components/CreateTaskComponents/Title';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          backgroundColor: "#080201"
        },
        background: {
          maxHeight: '100vh',
          minHeight: '100vh',
          minWidth: '100vw',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        },
        nav: {
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
        }
    }));

interface Props {
    
}


export default function CreateTaskPage({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div className={classes.root}>
           <div className = {classes.nav}>
                <NavMenu />
                <CreateTask />
           </div>
           <div>
                <Title />
                <img className = {classes.background} src = {Background} alt = ""/>
            </div>
        </div>
    )
}