import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button, Grid, Select, FormControl, InputLabel} from '@material-ui/core'
import PropTypes from 'prop-types';
import '../index.css'

const useStyles = makeStyles((theme) => ({
    form: {
        height: 'auto',
        width: '100%',
        border: '1px solid',
        borderRadius: 4,
        borderColor: 'black'
    },
    root: {
        margin: theme.spacing(3)
    },
    button: {
        margin: theme.spacing(3),
        color: 'black',
        border: '1px solid',
        fontFamily: '\'Open Sans\', sans-serif',
        height: '4em'
    },
    select: {
        margin: theme.spacing(3),
        color: 'black',
        border: '1px solid'
    }
}));

function InputForm({props}){
    const [text, setText] = useState('')

    async function apiCall() {
        props.setLoading(true);
        return await fetch('http://c90fd30a5a3d.ngrok.io/predict', {
            method: 'POST',
            body: {model: "BART", input_text: text}
          })
    }
    async function summarize(event) {
        event.preventDefault();
        let promise = apiCall();
        promise.then((response) => response.json())
          .then((response) => {
                props.setResponse(response.body);
                props.setLoading(false);
            })
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
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="model"></InputLabel>
                            <Select native id="model" className={classes.select}>
                                <option aria-label="None" value="" />
                                <option value={"BERT"}>BERT</option>
                                <option value={"BART"}>BART</option>
                            </Select>
                        </FormControl>
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
