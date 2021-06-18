import {
  Button,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import BgImage from "./assets/GODE-chooseUser.png";
import { User } from "./interfaces/User";
import CustomPopup from "./CustomPopup";
import { getAll } from "./services/userService";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./slices/userSlice";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bgImage: {
      background: `url(${BgImage})`,
      backgroundSize: "100%",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "45px",
      color: "white",
      paddingTop: "235px",
      fontFamily: "Poppins",
      fontWeight: 800,
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
      color: "white",
    },
    center: {
      textAlign: "center",
      paddingTop: "30px",
    },
    button: {
      background: "linear-gradient(45deg, #00b2ff 30%, #0D00FF 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(0, 178, 255, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
    centerButton: {
      textAlign: "center",
      paddingTop: "70px",
    },
  })
);

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

export default function ChooseUser({}: Props): ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const classNameButton = ButtonStyle();

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>("");

  useEffect(() => {
    console.log("user changed", selectedUser);
  }, [selectedUser]);

  const defaultValues = {
    id: "",
  };

  const { register, handleSubmit, control, reset } = useForm<User>({
    defaultValues,
  });

  const onSubmit = () => {
    // users = toti userii, selectedUser = id-ul userului

    const user = users.find((x) => x.id === selectedUser);

    dispatch(
      login({
        id: selectedUser,
        username: user!.username || "",
        isLoggedIn: true,
      })
    );
    history.push("/home");
    reset();
  };

  const renderUsers = () => {
    return users.map((user: User) => {
      return (
        <MenuItem key={user.id} value={user.id}>
          {user.username}
        </MenuItem>
      );
    });
  };

  useEffect(() => {
    getAll().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleChange = (e: any) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div className={classes.bgImage}>
      <div className={classes.title}>Choose your user</div>
      <div className={classes.center}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
          <Controller
            control={control}
            name="userId"
            defaultValue=""
            render={({ ref }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  style={{ color: "white" }}
                  id="demo-simple-select-outlined-label"
                >
                  User
                </InputLabel>
                <Select
                  inputRef={ref}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  className={classes.select}
                  value={selectedUser}
                  onChange={(e) => {
                    handleChange(e);
                    // onChange(e.target.value);
                  }}
                  label="User"
                >
                  {renderUsers()}
                </Select>
              </FormControl>
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
        <Button
          classes={{
            root: classNameButton.root,
            label: classNameButton.label,
          }}
          onClick={() => history.push("/createUser")}
        >
          Create User
        </Button>
      </div>

      <div className={classes.centerButton}>
        <CustomPopup />
      </div>
    </div>
  );
}
