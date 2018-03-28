import React from 'react';

export const Pagination = (props) => {
    return ( 
        <div>
            <button onClick={props.prevButtonClick}>{"<"}</button>
            <button onClick={props.nextButtonClick}>{">"}</button>
        </div>
    );
};
