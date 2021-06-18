import React, { ReactElement, useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getWeeklyInformation } from "../../services/progressService";
import { useSelector } from "react-redux";
import { DailyInformation } from "../../interfaces/DailyInformation";

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
  const user = useSelector((state: any) => state.user);
  const [weeklyInfo, setWeeklyInfo] = useState<DailyInformation>(
    {} as DailyInformation
  );

  useEffect(() => {
    getWeeklyInformation({ date: new Date(), userId: user.id }).then(
      (response: DailyInformation) => {
        setWeeklyInfo({
          ...response,
          progressInMinutes: +(response.progressInMinutes / 60).toFixed(1),
        });
      }
    );
  }, []);

  return (
    <div>
      <div className={classes.details}>
        Goals completed: {weeklyInfo.goalsCompleted}
      </div>
      <div className={classes.details}>
        Tasks solved: {weeklyInfo.tasksCompleted}
      </div>
      <div className={classes.details}>
        Progress in hours: {weeklyInfo.progressInMinutes}
      </div>
      {/* <div className = {classes.details}>
                Hours of work:
            </div> */}
    </div>
  );
}
