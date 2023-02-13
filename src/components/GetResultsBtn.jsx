import React from "react";

function GetResultsBtn ({getResults}) {
    
    return (
        <div>
            <button 
                className="button-get-results"
                onClick={getResults}
            >
                Get Results
            </button>
        </div>
    )
}


export default GetResultsBtn;