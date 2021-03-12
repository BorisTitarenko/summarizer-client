import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button, Grid} from '@material-ui/core'
import PropTypes from 'prop-types';
import '../index.css'

const useStyles = makeStyles((theme) => ({
    form: {
        height: 'auto',
        width: '100%',
        border: 0,
        borderRadius: '10%'
    },
    root: {
        margin: theme.spacing(3)
    },
    button: {
        margin: theme.spacing(3),
        borderColor: 'black'
    }
}));

function InputForm({setResponse}){
    const [text, setText] = useState('')

    function summarize(event) {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET',
            data: {}
          }).then((response) => response.json()).then((response) => setResponse(response.body))
    }

    const classes = useStyles();

    return (
        <form onSubmit={summarize}>
            <Grid container className={classes.root}>
                <Grid container xs={9} justify='flex-end'>
                    <Grid item xs={9}>
                        <TextField 
                                className={classes.form}
                                id='MultilineInput'
                                multiline onChange = {(e) => setText(e.target.value)}
                                variant="outlined"
                                rows={14}
                            />
                    </Grid>
                    <Grid item xs={9}>
                        <Button type='submit' className={classes.button}> Summarize</Button>
                    </Grid>
                </Grid>
                
            </Grid>
            <br></br>
            
        </form>
    )
}

InputForm.propTypes = {
    setResponse: PropTypes.func
}
export default InputForm;
