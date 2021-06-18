import React, { ReactElement } from 'react';
import NavMenu from './components/CreateTaskComponents/NavMenu';
import CreateTask from './components/CreateTaskComponents/CreateTask';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import BgImage from "./assets/GODE-createTask.png";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bgImage: {
          background: `url(${BgImage})`,
          backgroundSize: "100%",
          minHeight: "calc(100vh - 70px)",
          display: 'flex',
          alignItems: "center"
        },
    }));

interface Props {
    
}


export default function CreateTaskPage({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div >
           
           <div className = {classes.bgImage}>
                <CreateTask />
            </div>
        </div>
    )
}