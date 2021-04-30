import React, { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { Goal } from "../../interfaces/Goal";
import { createGoal } from "../../services/goalService";
import Title from "./Title";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";
import { Checkbox, CheckboxProps, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    "& .MuiFormLabel-root": {
      color: "white",
    },
  },
  center: {
    textAlign: "center",
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

const GreenCheckbox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

interface Props {}

interface IFormValues {
  name: "";
}

export default function CreateGoal({}: Props): ReactElement {
  const defaultValues = {
    name: "",
    important: false
  };

  const { register, handleSubmit, control, reset } = useForm<Goal>({
    defaultValues,
  });

  const onSubmit = (formValues: Goal) => {
    createGoal(formValues);
    reset();
  };
  
  const classes = useStyles();

  const classNameButton = ButtonStyle();

  return (
    <div className={classes.center}>
      <Title />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          control={control}
          name="name"
          render={({ ref, value, onChange }) => (
            <CssTextField
              inputRef={ref}
              className={classes.margin}
              value={value}
              label="Goal"
              onChange={(e) => onChange(e.target.value)}
              variant="outlined"
              type="text"
              id="custom-css-outlined-input"
              autoComplete="off"
            />
          )}
        />
        <Controller
          control={control}
          name="important"
          defaultValue={false}
          render={({ ref, onChange, value }) => (
            <FormControlLabel
              control={
                <GreenCheckbox
                  inputRef={ref}
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                />
              }
              label="Important" style = {{color: blue[400], marginLeft: '16px', marginTop: '12px'}}
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
