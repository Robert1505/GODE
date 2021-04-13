import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      marginBottom: '10px',
      marginLeft: '80px',
      paddingBottom: '20px'
    },
    title: {
      fontSize: "45px",
      color: "white",
      fontFamily: "Poppins",
      fontWeight: 800,
    },
  })
);

interface Props {}

export default function Title({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Select your task and write it's progress
      </div>
    </div>
  );
}
