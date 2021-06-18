import React, { ReactElement, useEffect, useState } from "react";
import NavBar from "./components/AchievementsComponents/NavBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import BgImage from "./assets/achievements3.png";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { getAchievement, getUserAchievements } from "./services/achievementService";
import { Achievement } from "./interfaces/Achievement";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexcontainer: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
      padding: "0",
      margin: "0",
      listStyle: "none",
    },
    flexitem: {
      height: "200px",
      width: "200px",
      backgroundColor: "white",
      marginTop: "20px",
      border: 1,
      borderColor: "white",
      fontFamily: "Poppins",
      fontWeight: 500,
      borderRadius: "7px",
      background: `url(${BgImage})`,
      backgroundSize: "100%",
      color: "white",
      filter: "drop-shadow(0 0 1.5rem #00b2ff)",
    },
    title: {
      textAlign: "center",
      fontWeight: 800,
      paddingTop: "25px",
      padding: "10px",
    },
    subtitle: {
      textAlign: "center",
      paddingTop: "25px",
      fontSize: "15px",
    },
    whenCompleted: {
      height: "200px",
      width: "200px",
      backgroundColor: "white",
      marginTop: "20px",
      border: 1,
      borderColor: "white",
      fontFamily: "Poppins",
      fontWeight: 500,
      borderRadius: "7px",
      filter: "drop-shadow(0 0 1.5rem #26ff00)",
      background: `url(${BgImage})`,
      backgroundSize: "cover",
      color: "white",
    },
  })
);

interface Props {}

export default function Achievements({}: Props): ReactElement {
  const classes = useStyles();

  const [achievements, setAchievements] = useState<Achievement[]>([]);

  const [userAchievements, setUserAchievements] = useState<Achievement[]>([]);

  const user = useSelector((state : any) => state.user)

  useEffect(() => {
    getAchievement().then((data: Achievement[]) => {
      setAchievements(data);
    });
    getUserAchievements(user.id).then((data : Achievement[]) =>{
      setUserAchievements(data);
    })
  }, []);

  const isAchievementCompleted = (index: number): boolean => {
    const achievementIndex = userAchievements.findIndex(x => x.index == index);
    if (achievementIndex != -1) {
      return true;
    }
    return false;
  }

  const renderAchievements = () => {
    return achievements.map((achievement: Achievement) => {
      return (
        <Grid item xs={3} style={{ display: "flex", justifyContent: "center" }}>
          <div className={isAchievementCompleted(achievement.index) ? classes.whenCompleted : classes.flexitem}>
            <div className={classes.title}>{achievement.title}</div>
            <div className={classes.subtitle}>{achievement.description}</div>
          </div>
        </Grid>
      );
    });
  };

  return (
    <div>
      
      <div>
        <Grid container xs={12}>
          {renderAchievements()}
        </Grid>
      </div>
    </div>
  );
}
