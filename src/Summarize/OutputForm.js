import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Grid} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    form: {
        height: 'auto',
        width: '100%',
        border: '1px solid',
        borderColor: 'black',
        borderRadius: 5,
        '& .MuiOutlinedInput-root' : {
            borderRadius: 'inherit',
            borderColor: 'inherit'
        }
    }, 
    root: {
        margin: theme.spacing(3)
    }
}));

function OutputForm({response}) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container xs={9} justify='flex-end'>
                <Grid item xs={9}>
                    <TextField
                        className={classes.form}
                        multiline value={response}
                        variant="outlined"
                        rows={7}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
export default OutputForm
