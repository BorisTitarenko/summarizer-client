import React, {useState} from 'react';
import InputForm from './InputForm';
import OutputForm from './OutputForm';
import LoadingCircle from './LoadingCircle';

function Summarizer() {
    const [response, setResponse] = useState(null)
    const [isLoading, setLoading] = useState(false)

    return (
        <div className='summarize-wrapper'>
            <InputForm props={{setResponse, setLoading}} />
            <LoadingCircle isLoading={isLoading}/>
            <OutputForm response={response}/>
        </div>
    )
}

export default Summarizer;