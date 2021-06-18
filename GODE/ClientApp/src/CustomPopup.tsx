import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Instructions
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Instructions
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            If this is your first time here, please go on '/createUser' to create a User with your name!
          </Typography>
          <Typography gutterBottom>
            Hello! This is GODE (GOal DEstroyer), a to-do list app where you can create your goals(Create Goal Page) and their tasks(Create Task Page) where you need to choose a goal, type the name of the task and add an estimated time for this task!
            On Add Progress Page you need to select your task, write your progress for it and check if it is completed!
            On Goals/Tasks Page you can see all this data!
          </Typography>
          <Typography gutterBottom>
            On Daily Summary Page you can see how many goals/tasks you have completed in that day and how many hours you progressed in that day! Same with Weekly Summary Page!
            As a BONUS, on Daily Summary Page you can type how productive have you been in that day and take a screenshot for your friends to motivate them!
            On Achievements Page you can see the achievements and if it is completed or not! (green - completed; blue - uncompleted)
          </Typography>
          <Typography gutterBottom>
            Hope you enjoy your time on this app and hope this app can motivate you to crush your goals!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            I understand
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}