import React, {useState} from 'react';
import InputForm from './InputForm';
import OutputForm from './OutputForm';

function Summarizer() {
    const [response, setResponse] = useState(null)

    return (
        <div>
            <InputForm setResponse={setResponse}/>
            <OutputForm response={response}/>
        </div>
    )
}

export default Summarizer;