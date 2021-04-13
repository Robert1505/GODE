import React, { ReactElement, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Task } from "../../interfaces/Task";
import { createTask } from "../../services/taskService";
import { MenuItem, Select } from "@material-ui/core";
import { Goal } from "../../interfaces/Goal";
import { getGoals } from "../../services/goalService";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    color: "white",
    '& .MuiFormLabel-root': {
      color: 'white'
  }
  },
  center: {
    textAlign: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'blue',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'blue'
    },
    '& .MuiSelect-selectMenu': {
      color: 'white'
    }
},
}));

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
    },
    '& .MuiInputBase-input': {
      color: 'white'
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
    marginLeft: '25px',
    marginTop: '10px'
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
    createTask(formValues);
    setSelectedGoal("");
    reset();
  };

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
      <Title />
      <div className = {classes.center}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
          <Controller
            control={control}
            name="goalId"
            defaultValue=""
            render={({ ref, onChange }) => (
              <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel style = {{color: 'white'}} id="demo-simple-select-outlined-label">Goal</InputLabel>
              <Select
                inputRef={ref}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                className={classes.select}
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
              <CssTextField 
                inputRef={ref}
                className={classes.margin}
                label="Task"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                variant="outlined"
                type="text"
                id="custom-css-outlined-input"
              />
            )}
          />

          <Controller
            control={control}
            name="estimatedTime"
            defaultValue={0}
            render={({ ref, onChange, value }) => (
              <CssTextField 
                inputRef={ref}
                className={classes.margin}
                label="Estimated Time"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                variant="outlined"
                type="number"
                id="custom-css-outlined-input"
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
