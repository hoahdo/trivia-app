import React from "react";

function Answers ({id, className, selected, option, clickHandler}) {

    return (
        <p
            className={className}
            id={id}
            selected={selected}
            onClick={clickHandler}
        >
            {option}
        </p>
    )
}

export default Answers;