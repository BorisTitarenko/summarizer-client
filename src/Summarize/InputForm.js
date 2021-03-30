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
    const [modelName, setModelName] = useState('');
    const [wordsCount, setWordsCount] = useState('');
    const [countError, setCountError] = useState({isError: false});

    function summarize(event) {
        event.preventDefault();
        props.setLoading(true);

        fetch('http://c90fd30a5a3d.ngrok.io/predict', {
            method: 'POST',
            body: {model: modelName, input_text: text, num_words: wordsCount}
          }).then((response) => response.json())
          .then((response) => {
                props.setResponse(response.body);
                props.setLoading(false);
            })
    }

    function validateAndSetNum(e) {
        let num = parseInt(e.target.value);
        if (num > text.match(/\S+/g).length) {
            setCountError({isError: true, label: "Error", helperText: "Too big"})
        } else if (num < 10) {
            setCountError({isError: true, label: "Error", helperText: "Too smal"})
        } else {
            setCountError({isError: false});
            setWordsCount(num);
        }
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
                        <Button
                            type='submit' 
                            className={classes.button}
                            disabled={countError.isError}
                        >
                            Summarize
                        </Button>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="model"></InputLabel>
                            <Select
                                native 
                                id="model" 
                                className={classes.select} 
                                onChange={(e) => setModelName(e.target.value)}
                            >
                                <option aria-label="None" value="" />
                                <option value={"BERT"}>BERT</option>
                                <option value={"BART"}>BART</option>
                            </Select>
                        </FormControl>
                        <TextField
                            error={countError.isError}
                            id="outlined-error-helper-text"
                            label={countError.label}
                            defaultValue={30}
                            helperText={countError.helperText}
                            variant="outlined"
                            onChange={validateAndSetNum}
                            className={classes.select}
                        />
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
