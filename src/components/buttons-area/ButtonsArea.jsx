import React from "react";
import Button from "../button/Button";
import "./buttons-area.css"

export default function ButtonsArea(){
    return(
        <div className="buttons-container">
           <Button text="Autó kibérlése" />
           <Button text="Autó visszavételetése" />
        </div>
    )
}