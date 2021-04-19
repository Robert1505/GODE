import React, { ReactElement, useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getProgressOnDate } from "../../services/progressService";
import { Progress } from "../../interfaces/Progress";
import { getTasksSolvedToday } from "../../services/taskService";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      fontSize: "50px",
      fontFamily: "Poppins",
      fontWeight: 800,
      color: "black",
      paddingLeft: "70px",
    },
  })
);

interface Props {}

export default function Details({}: Props): ReactElement {
  const classes = useStyles();

  const [progress, setProgress] = useState(0);

  const [tasksSolvedToday, setTasksSolvedToday] = useState(0);

  useEffect(() => {
    getProgressOnDate({ date: new Date() }).then((data: Progress) => {
      if(data.minutes !== 0){
        let inHours = (data.minutes / 60).toFixed(1);
        setProgress(+inHours);
      }
    });
    getTasksSolvedToday().then((data: number) => {
      setTasksSolvedToday(data);
    })
  }, []);


  return (
    <div>
      <div className={classes.details}>Goals solved:</div>
      <div className={classes.details}>Tasks solved: {tasksSolvedToday}</div>
      <div className={classes.details}>Progress in hours: {progress}</div>
      {/* <div className={classes.details}>Hours of work:</div> */}
    </div>
  );
}
