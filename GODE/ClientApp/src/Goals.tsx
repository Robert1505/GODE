import React, { ReactElement, useEffect, useState } from "react";
import NavMenu from "./components/GoalsComponents/NavMenu";
import Background from "./GODE-goalstasks.png";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getGoals } from "./services/goalService";
import { Goal } from "./interfaces/Goal";
import { Task } from "./interfaces/Task";
import { getTasks } from "./services/taskService";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#080201",
    },
    background: {
      maxHeight: "100vh",
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    nav: {
      // position: "absolute",
      // top: "0",
      // left: "0",
      // right: "0",
      // bottom: "0",
    },
  })
);

interface Props {}

export default function Goals({}: Props): ReactElement {
  const classes = useStyles();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getGoals().then((data) => {
      setGoals(data);
    });
  }, []);

  useEffect(() => {
    getTasks().then((data: Task[]) => {
      /// sortam
      /// Selection Sort
      data.sort(function(a,b){
        return b.estimatedTime - a.estimatedTime
      })
      setTasks(data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <NavMenu />
      </div>
      <div>
        {/* <img className = {classes.background} src = {Background} alt = ""/> */}
        {goals.map((goal: Goal) => {
          return <p style={{ color: "white" }}>{goal.name}</p>;
        })}
        {tasks.map((task: Task) => {
          return <p style={{ color: "white" }}>{task.name} {task.estimatedTime}</p>;
        })}
      </div>
    </div>
  );
}
