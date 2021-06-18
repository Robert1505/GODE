import React, { ReactElement, useEffect, useState } from "react";
import NavMenu from "./components/GoalsComponents/NavMenu";
import { getGoals } from "./services/goalService";
import { Goal } from "./interfaces/Goal";
import { Task } from "./interfaces/Task";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import BgImage from "./assets/GODE-goalstasks.png";
import Title from "./components/GoalsComponents/Title";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#080201",
      overflow: "hidden",
    },
    bgImage: {
      background: `url(${BgImage}) repeat-x`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      backgroundRepeat: "no-repeat",
    },
  })
);

interface Props {}

export default function Goals({}: Props): ReactElement {
  const classes = useStyles();
  const [goals, setGoals] = useState<Goal[]>([]);
  const user = useSelector((state : any) => state.user)

  useEffect(() => {
    getGoals(user.id).then((data: Goal[]) => {
      data.sort((a: Goal, b: Goal) => {
        if (a.important) return -1;
        if (b.important) return 1;
        return 0;
      });
      data.forEach((goal: Goal) => {
        goal.tasks.sort(function (a: Task, b: Task) {
          if (a.completed === false && b.completed === true) {
            return -1;
          }
          if (b.completed === false && a.completed === true) {
            return 1;
          }
          return a.estimatedTime - b.estimatedTime;
        });
      });

      setGoals(data);
    });
  }, []);

  const renderCheckMarkForGoal = (data: Goal) => {
    var ok: boolean;
    ok = true;
    data.tasks.map((task: Task) => {
      if (task.completed === false) {
        ok = false;
      }
    });
    if (ok === true) {
      return <DoneAllIcon />;
    }
  };

  const renderCheckMark = (completed: boolean) => {
    if (completed === true) {
      return <DoneOutlineIcon />;
    }
  };

  const renderArrow = () => {
    return <div style={{ display: "inline" }}>&#8594;</div>;
  };

  const renderTasks = (tasks: Task[]) => {
    return tasks.map((task: Task) => {
      return (
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "20px",
            textTransform: "capitalize",
            marginLeft: 50,
            display: "flex",
          }}
        >
          <div style={{ width: 200 }}>{task.name}</div>
          <div style={{ display: "inline" }}>
            {renderArrow()}
            <div style={{ marginLeft: 185, display: "inline-flex", width: 30 }}>
              {task.estimatedTime}m
            </div>
            <div style={{ marginLeft: 210, display: "inline-flex", width: 30 }}>
              {task.progress}m
            </div>
            <div style={{ marginLeft: 100, display: "inline-flex", width: 30 }}>
              {renderCheckMark(task.completed)}
            </div>
          </div>
        </div>
      );
    });
  };

  const renderGoals = () => {
    return goals
      .filter((x) => x.completed === false)
      .map((goal: Goal) => {
        return (
          <React.Fragment>
            <div
              style={{
                fontFamily: "Poppins",
                marginLeft: goal.important ? 196 : 225,
                fontWeight: 800,
                fontSize: "25px",
                textTransform: "capitalize",
                display: "flex",
                marginBottom: 30,
              }}
            >
              <div style={{ width: goal.important ? 329 : 300 }}>
                {goal.important && <PriorityHighIcon />} {goal.name}
                {renderCheckMarkForGoal(goal)}
              </div>
              <div>{renderTasks(goal.tasks)}</div>
            </div>
          </React.Fragment>
        );
      });
  };

  

  return (
    <div className={classes.root}>
      
      <div className={classes.bgImage}>
        <Title />
        {renderGoals()}
      </div>
    </div>
  );
}
