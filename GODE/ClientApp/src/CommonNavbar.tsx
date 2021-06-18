import React, { ReactElement, useState } from "react";
import avatar from "./GODE.png";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Menu, MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./slices/userSlice";


interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    row: {
      flexGrow: 1,
    },
    AppBar: {
      backgroundColor: "#000000",
      backgroundSize: "cover",
    },
    grow: {
      flexGrow: 1,
    },
    userButton: {
      fontFamily: "Arimo",
      background: "#6f00ff",
      margin: "auto",
      fontSize: "11px",
      color: "#fff",
      borderRadius: "25px",
      padding: "2px 25px",
      marginRight: "15px",
      textTransform: "uppercase",
      "&:hover": {
        background: "#4800ff",
      },
    },
    button: {
      fontFamily: "Arimo",
      background: "#00b2ff",
      margin: "auto",
      fontSize: "11px",
      color: "#fff",
      borderRadius: "25px",
      padding: "2px 25px",
      marginRight: "15px",
      textTransform: "uppercase",
      "&:hover": {
        background: "#0D00FF",
      },
    },
    container: {
      width: 1600,
      margin: "auto",
    },
    logo: {
      maxWidth: 70,
    },
  })
);

interface IRoute {
    route: string,
    displayName: string;
}

export default function CommonNavBar({}: Props): ReactElement {
  const classes = useStyles();

  const location = useLocation();

  const user = useSelector((state: any) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout);
    history.push("/");
  };

  const routes: IRoute[] = [
      {
          route: "home",
          displayName: "Home",
      },
      {
        route: "createGoal",
        displayName: "Create Goal"
    },
    {
        route: "createTask",
        displayName: "Create Task"
    },
    {
        route: "addProgress",
        displayName: "Add Progress"
    },
    {
        route: "goals",
        displayName: "Goals/Tasks"
    },
    {
        route: "dailySummary",
        displayName: "Daily Summary"
    },
    {
        route: "weeklySummary",
        displayName: "Weekly Summary"
    },
    {
        route: "achievements",
        displayName: "Achievements"
    }
  ];

  const renderButtons = () => {
    return routes.map((route: IRoute) => {
      if (`/${route.route}` !== location.pathname) {
        return (
            
          <Link to={"/" + route.route} style={{ textDecoration: "none" }}>
            <Button color="inherit" className={classes.button}>
              {route.displayName}
            </Button>
          </Link>
        );
      }
    });
  };

  

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.AppBar}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar variant="dense">
              <Grid className={classes.grow}>
                <img src={avatar} alt="logo" className={classes.logo} />
              </Grid>
              <div>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  style={{ color: "#fff" }}
                  className = {classes.userButton}
                >
                  {user.username}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
              {renderButtons()}
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    </div>
  );
}
