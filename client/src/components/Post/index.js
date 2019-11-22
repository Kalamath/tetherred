import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: "grey",
},
input: {
    marginLeft: theme.spacing(1),
    color: "white",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="What's Up?"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="image">
        <InsertPhotoIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="" className={classes.iconButton} aria-label="link">
        <InsertLinkIcon />
      </IconButton>
    </Paper>
  );
}