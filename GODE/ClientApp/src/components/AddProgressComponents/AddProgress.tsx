import React, { ReactElement, useEffect, useState } from "react";
import { blue } from '@material-ui/core/colors';
import { Controller, useForm } from "react-hook-form";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Task } from "../../interfaces/Task";
import { addProgress, markAsCompleted } from "../../services/taskService";
import { getTasks } from "../../services/taskService";
import Title from "./Title";
import { MenuItem, Select } from "@material-ui/core";
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    color: "white",
    "& .MuiFormLabel-root": {
      color: "white",
    },
  },
  center: {
    marginLeft: "250px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "blue",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "blue",
    },
    "& .MuiSelect-selectMenu": {
      color: "white",
    },
    label: {},
  },
}));

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
  },
})(TextField);

const ButtonStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #57E2E5 30%, #623CEA 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgb(98, 60, 234)",
    marginLeft: "25px",
    marginTop: "10px",
  },
  label: {
    textTransform: "capitalize",
  },
});

interface Props {}

interface IFormValues {
  taskId: string;
  minutes: number;
  completed: boolean;
}

export default function AddProgress({}: Props): ReactElement {
  const defaultValues = {
    taskId: "",
    minutes: 0,
    completed: false
  };
  const { register, handleSubmit, control, reset } = useForm<IFormValues>({
    defaultValues,
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<string>("");

  const onSubmit = (formValues: IFormValues) => {
    // requests
    addProgress(formValues);
    if(formValues.completed === true){
      markAsCompleted(formValues.taskId);
    }

    // reset
    setSelectedTask("");
    reset();
  };

  const classes = useStyles();

  const classNameButton = ButtonStyle();

  const renderMenuItems = () => {
    return tasks.map((task: Task) => {
      return <MenuItem value={task.id}>{task.name}</MenuItem>;
    });
  };

  const handleChange = (e: any) => {
    setSelectedTask(e.target.value);
  };

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  return (
    <div className={classes.center}>
      <Title />
      <div className={classes.center}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
          <Controller
            control={control}
            name="taskId"
            defaultValue=""
            render={({ ref, onChange }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  style={{ color: "white" }}
                  id="demo-simple-select-outlined-label"
                >
                  Task
                </InputLabel>
                <Select
                  inputRef={ref}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  className={classes.select}
                  value={selectedTask}
                  onChange={(e) => {
                    handleChange(e);
                    onChange(e.target.value);
                  }}
                  label="Task"
                >
                  {renderMenuItems()}
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="minutes"
            defaultValue={0}
            render={({ ref, onChange, value }) => (
              <CssTextField
                inputRef={ref}
                className={classes.margin}
                label="Progress"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                variant="outlined"
                type="number"
                id="custom-css-outlined-input"
              />
            )}
          />
          <Controller
            control={control}
            name="completed"
            defaultValue={0}
            render={({ ref, onChange, value }) => (
              <GreenCheckbox 
                inputRef={ref}
                checked={value}
                onChange={(e) => onChange(e.target.checked)} 
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
    </div>
  );
}
