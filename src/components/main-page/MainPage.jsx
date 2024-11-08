import React from "react";
import InputArea from "../input-area/InputArea.jsx";
import OutputArea from "../../output-area/OutputArea.jsx";
import "../../functions/carsRental.js";
import "../default-layout/default-layout.css"

export default function MainPage() {
  return <div className="container">
    <InputArea />
    <OutputArea />
    </div>;
}
