import React from "react";

export default function Button( {text, onClick} ){
    return(
        <div>
            <input type="button" value={text} onClick={onClick} />
        </div>
    )
}