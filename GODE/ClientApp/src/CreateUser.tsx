import { Button, createStyles, makeStyles, TextField, Theme, withStyles } from '@material-ui/core';
import React, { ReactElement } from 'react'
import NavBar from './components/CreateUserComponents/NavBar'
import BgImage from './assets/GODE-createuser.png'
import Title from './components/CreateUserComponents/Title'
import { Controller, useForm } from 'react-hook-form';
import { User } from './interfaces/User';
import { createUser } from './services/userService';

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


export default function CreateUser({}: Props): ReactElement {

    const classes = useStyles();
    const classNameButton = ButtonStyle();

    const defaultValues = {
        username: "",
      };
    
      const { register, handleSubmit, control, reset } = useForm<User>({
        defaultValues,
      });
    
      const onSubmit = (formValues: User) => {
        createUser(formValues);
        reset();
      };
      

    return (
        <div className = {classes.root}>
            
            <div className = {classes.bgImage}>
                <div className = {classes.center}>
                    <Title />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className = {classes.center1}>
                    <Controller
                    control={control}
                    name="username"
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
    )
}
