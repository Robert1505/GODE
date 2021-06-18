import React, { ReactElement } from "react";
import CreateGoal from "./components/CreateGoalComponents/CreateGoal";
import NavMenu from "./components/CreateGoalComponents/NavMenu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import BgImage from "./assets/GODE-createGoal.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bgImage: {
      background: `url(${BgImage})`,
      backgroundSize: "100%",
      minHeight: "calc(100vh - 70px)",
      display: 'flex',
      alignItems: "center",
      backgroundRepeat: 'no-repeat',
    },
  })
);

interface Props {}

export default function CreateGoalPage({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <div>
      
      <div className={classes.bgImage}>
        <CreateGoal />
      </div>
    </div>
  );
}
