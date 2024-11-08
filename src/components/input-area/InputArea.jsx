import React from "react";
import ButtonsArea from "../buttons-area/ButtonsArea";
import "./input-area.css";
import "../../functions/carsRental.js";

export default function InputArea() {
  return (
    <div className="input-area">
      <div>
        <label htmlFor="">Bérlés kezdete:</label>
        <input type="date" name="" id="" />
        <label htmlFor="">Bérlés vége:</label>
        <input type="date" name="" id="" />
      </div>

      <div>
        <label htmlFor="">Válassza ki a rendszámot:</label>
        <select id="select-platenumber">
          <option value="">- válasszon -</option>
        </select>
      </div>

      <ButtonsArea />
    </div>
  );
}
