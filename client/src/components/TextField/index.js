import React from 'react';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../TextField/index.css'

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
                borderColor: 'primary',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
                fullWidth
                rows="5"
                margin="normal"
            />
        </form>
    );
}