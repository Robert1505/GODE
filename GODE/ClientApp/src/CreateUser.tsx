import { createStyles, makeStyles, TextField, Theme, withStyles } from '@material-ui/core';
import React, { ReactElement } from 'react'
import NavBar from './components/CreateUserComponents/NavBar'
import BgImage from './assets/GODE-createuser.png'
import Title from './components/CreateUserComponents/Title'
import { Controller, useForm } from 'react-hook-form';
import { User } from './interfaces/User';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#080201",
    },
    bgImage: {
      background: `url(${BgImage})`,
      backgroundSize: "100%",
      minHeight: "calc(100vh - 70px)",
      
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '235px'
    },
    margin: {
        margin: theme.spacing(1),
        "& .MuiFormLabel-root": {
          color: "white",
        },
    },
    center1: {
        display: 'flex',
        justifyContent: 'center',
    },
  })
);

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


export default function CreateUser({}: Props): ReactElement {

    const classes = useStyles();

    const defaultValues = {
        name: "",
      };
    
      const { register, handleSubmit, control, reset } = useForm<User>({
        defaultValues,
      });
    
      const onSubmit = (formValues: User) => {
        // createGoal(formValues);
        reset();
      };
      

    return (
        <div className = {classes.root}>
            <div>
                <NavBar />
            </div>
            <div className = {classes.bgImage}>
                <div className = {classes.center}>
                    <Title />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className = {classes.center1}>
                    <Controller
                    control={control}
                    name="name"
                    render={({ ref, value, onChange }) => (
                        <CssTextField
                        inputRef={ref}
                        className={classes.margin}
                        value={value}
                        label="User"
                        onChange={(e) => onChange(e.target.value)}
                        variant="outlined"
                        type="text"
                        id="custom-css-outlined-input"
                        autoComplete="off"
                        />
                    )}
                    />
                </form>
            </div>
        </div>
    )
}
