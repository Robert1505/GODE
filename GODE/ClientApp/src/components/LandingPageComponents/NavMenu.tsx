import React, { ReactElement } from "react";
import avatar from "../../GODE.png";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Menu, MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/userSlice";

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
    button: {
      fontFamily: "Arimo",
      background: "#00b2ff",
      margin: "auto",
      fontSize: "11px",
      color: "#fff",
      borderRadius: "25px",
      padding: "2px 25px",
      marginRight: "15px",
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

export default function NavBar({}: Props): ReactElement {
  const classes = useStyles();
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
              <Link to="/createUser" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  Create User
                </Button>
              </Link>
              <Link to="/createGoal" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  Create Goal
                </Button>
              </Link>
              <Link to="/createTask" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  Create Task
                </Button>
              </Link>
              <Link to="/addProgress" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  Add Progress
                </Button>
              </Link>
              <Link to="/goals" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  Goals/Tasks
                </Button>
              </Link>
              <Link to="/dailySummary" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  Daily Summary
                </Button>
              </Link>
              <Link to="/weeklySummary" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  Weekly Summary
                </Button>
              </Link>
              <Link to="/achievements" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  Achievements
                </Button>
              </Link>
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    </div>
  );
}
