import React, { ReactElement } from 'react';
import NavMenu from './components/AddProgressComponents/NavMenu';
import AddProgress from './components/AddProgressComponents/AddProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import BgImage from "./assets/GODE-addprogress.png";

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

export default function AddProgressPage({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div>
            
            <div className = {classes.bgImage}>
                <AddProgress />
            </div>
        </div>
    )
}
