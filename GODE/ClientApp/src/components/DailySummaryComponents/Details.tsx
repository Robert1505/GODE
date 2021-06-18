import React, { ReactElement, useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  getDailyInformation,
} from "../../services/progressService";

import { DailyInformation } from "../../interfaces/DailyInformation";
import { useSelector } from "react-redux";

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
  const userId = useSelector((state : any) => state.user.id);

  const [dailyInformation, setDailyInformation] = useState<DailyInformation>({
    goalsCompleted: 0,
    progressInMinutes: 0,
    tasksCompleted: 0,
  });

  useEffect(() => {
   
    getDailyInformation({ date: new Date(), userId }).then((data: DailyInformation) => {
      setDailyInformation({
        goalsCompleted: data.goalsCompleted,
        tasksCompleted: data.tasksCompleted,
        progressInMinutes: +(data.progressInMinutes / 60).toFixed(1),
      });
    });
  }, []);

  return (
    <div>
      <div className={classes.details}>
        Goals completed: {dailyInformation.goalsCompleted}
      </div>
      <div className={classes.details}>
        Tasks solved: {dailyInformation.tasksCompleted}
      </div>
      <div className={classes.details}>
        Progress in hours: {dailyInformation.progressInMinutes}
      </div>
      {/* <div className={classes.details}>Hours of work:</div> */}
    </div>
  );
}
