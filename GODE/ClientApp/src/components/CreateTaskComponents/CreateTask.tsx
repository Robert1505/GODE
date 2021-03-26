import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Task } from "../../interfaces/Task";
import { createTask } from "../../services/taskService";
import { MenuItem, Select } from "@material-ui/core";
import { Goal } from "../../interfaces/Goal";
import { getGoals } from "../../services/goalService";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    color: "white",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ButtonStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
});

interface Props {}

export default function CreateGoal({}: Props): ReactElement {
  const defaultValues = {
    goalId: "",
    name: "",
    duration: 0,
  };
  const { register, handleSubmit, control, reset } = useForm<Task>({
    defaultValues,
  });
  const [goals, setGoals] = useState<Goal[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const onSubmit = (formValues: Task) => {
    console.log("formvalues", formValues);
    createTask(formValues);
    reset();
  };

  useEffect(() => {
    console.log("formul a fost resetat");
  }, [reset]);

  const classes = useStyles();

  const classNameButton = ButtonStyle();

  const renderMenuItems = () => {
    return goals.map((goal: Goal) => {
      return <MenuItem value={goal.id}>{goal.name}</MenuItem>;
    });
  };

  const handleChange = (e: any) => {
    setSelectedGoal(e.target.value);
  };

  useEffect(() => {
    getGoals().then((data) => {
      setGoals(data);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          control={control}
          name="goalId"
          defaultValue=""
          render={({ ref, onChange }) => (
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Goal
              </InputLabel>
              <Select
                inputRef={ref}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedGoal}
                onChange={(e) => {
                  handleChange(e);
                  onChange(e.target.value);
                }}
                label="Goal"
              >
                {renderMenuItems()}
              </Select>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="name"
          defaultValue=""
          render={({ ref, onChange, value }) => (
            <InputBase
              inputRef={ref}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              type="text"
              className={classes.margin}
            />
          )}
        />

        <Controller
          control={control}
          name="estimatedTime"
          defaultValue={0}
          render={({ ref, onChange, value }) => (
            <InputBase
              inputRef={ref}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              type="number"
              className={classes.margin}
            />
          )}
        />
        <Button
          classes={{
            root: classNameButton.root,
            label: classNameButton.label,
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
