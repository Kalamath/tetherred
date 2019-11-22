import React from 'react';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'grey',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'red',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            '&:hover fieldset': {
                borderColor: 'teal',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'teal',
            },
        },
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        color: 'white'
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedInputs() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate>
            <CssTextField
                className={classes.margin}
                label="Write Chirp Here"
                variant="outlined"
                id="custom-css-outlined-input"
                multiline
                rows="5"
                margin="normal"
            />
        </form>
    );
}