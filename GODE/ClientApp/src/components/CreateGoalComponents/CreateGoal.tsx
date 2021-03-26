import axios from "axios";
import React, { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import background from "../../assets/GODE-createGoal.png";
import { Goal } from "../../interfaces/Goal";
import { createGoal } from "../../services/goalService";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  margin: {
    margin: theme.spacing(1),
    color: 'white'
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
  const { register, handleSubmit, control } = useForm<Goal>();

  const onSubmit = (formValues: Goal) => {
    createGoal(formValues);
  };

  const classes = useStyles();

  const classNameButton = ButtonStyle();

  return (
    <div>
      {/* <img className={classes.background} src={background} alt="" /> */}
      <Title />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          control={control}
          name="name"
          render={({ ref, value, onChange }) => (
            <InputBase
              inputRef={ref}
              //   value={value}
              onChange={(e) => onChange(e.target.value)}
              type="text"
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
