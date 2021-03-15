import React from "react";


function LoadingCircle({isLoading}) {
    const spinner = <div className='center-div'>
        <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

    return isLoading ? spinner : <p></p>
}

export default LoadingCircle;