import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#000000",
      display: "flex",
      alignItems: "center",
    },
    title: {
      fontSize: "35px",
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
        Write your goals down below and press the submit button
      </div>
    </div>
  );
}
