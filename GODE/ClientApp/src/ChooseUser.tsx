import {
  Button,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  Theme,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";
import BgImage from "./assets/GODE-chooseUser.png";
import { User } from "./interfaces/User";
import Popup from "reactjs-popup";

// import "./custom.css";
import CustomPopup from "./CustomPopup";

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
    //   textAlign: "center",
    //   paddingTop: "70px",
    },
  })
);

export default function ChooseUser({}: Props): ReactElement {
  const classes = useStyles();

  const defaultValues = {
    userId: "",
  };

  const { register, handleSubmit, control, reset } = useForm<User>({
    defaultValues,
  });

  const Modal = () => {
    return (
      <Popup
        trigger={<Button className={classes.button}>Instructions</Button>}
        modal
        nested
      >
        {(close: any) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Instructions </div>
            <div className="content">
              {" "}
              If it is the first time on our website, please go to
              './createUser' to create your user!
              <br />
              As a new user we need to explain you our features. First you need
              to go on Create Goal page and create your goals. After this go on
              Create Task page and create your tasks for the selected goal,
              mentioning the estimated time! You can see your goals and tasks on
              Goals/Tasks page. If you have completed a task, go on Add Progress
              page and select our task mentioning your progress time and check
              the completed checkmark. When all tasks from one goal are
              completed, the goal will disapper from Goals/Tasks page. On Daily
              Summary and Weekly Summary page you can see your daily/weekly
              summary. And finally, on Achievements page you can reach the
              achievements from there. Now choose your user and begin the
              experience on our website!
              <br />
              Hope your experience on our website will be a good one!
            </div>
          </div>
        )}
      </Popup>
    );
  };

  const renderSimpleModal = () => (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
    </Popup>
  );

  const renderPopup = () => {
    return (
      <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        nested
      >
        {(close: any) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Modal Title </div>
            <div className="content">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur sit commodi beatae optio voluptatum sed eius cumque,
              delectus saepe repudiandae explicabo nemo nam libero ad,
              doloribus, voluptas rem alias. Vitae?
            </div>
            <div className="actions">
              <Popup
                trigger={<button className="button"> Trigger </button>}
                position="top center"
                nested
              >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni omnis delectus nemo, maxime molestiae dolorem
                  numquam mollitia, voluptate ea, accusamus excepturi deleniti
                  ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </span>
              </Popup>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
    );
  };

  return (
    <div className={classes.bgImage}>
      <div className={classes.title}>Choose your user</div>
      <div className={classes.center}>
        <Controller
          control={control}
          name="userId"
          defaultValue=""
          render={({ ref, onChange }) => (
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
                // value={selectedGoal}
                onChange={(e) => {
                  // handleChange(e);
                  onChange(e.target.value);
                }}
                label="User"
              >
                {/* {renderMenuItems()} */}
              </Select>
            </FormControl>
          )}
        />
      </div>
      <div className={classes.centerButton}>
          <CustomPopup />
      </div>
    </div>
  );
}
