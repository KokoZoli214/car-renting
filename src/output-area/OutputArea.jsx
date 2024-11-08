import React, { useEffect, useState } from "react";
import Button from "../components/button/Button";
import { showAllCarsBtn } from "../functions/carsRental.js";
import "./output-area.css";

export default function OutputArea() {

  const [allCarsArray, setAllCarsArray] = useState([]);

  const handleShowAllCarsBtn = () => {
    showAllCarsBtn();
  };

  useEffect(() => {
    fetch("/cars.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hiba az adatok betöltésekor" + response.status);
        }
        return response.json();
      })
      .then((data) => {

        setAllCarsArray(data.cars)

        const selectPlatenumber = document.getElementById("select-platenumber");

        allCarsArray.forEach((car) => {
          const option = document.createElement("option");

          option.textContent = car.licensePlate;
          selectPlatenumber.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("Hiba törént!", error);
      });
  }, []);

  return (
    <div className="output-container">
      <div className="list-buttons-area col-2">
        <Button
          text="Összes autó"
          id="show-all-cars-btn"
          onClick={handleShowAllCarsBtn}
        />
        <Button text="Kibérelhető autók" />
        <Button text="Kibérelt autók" />
        <Button text="Legnépszerább autók" />
        <div>
          <span>Keresés rendszám alapján</span>
          <label htmlFor="">Adja meg a rendszámot:</label>
          <input type="text" name="" id="" />
          <Button text="Keres" />
        </div>
      </div>
      <div className="display-container col-10">
        <table>
          <thead>
            <tr>
              <th>Autó típusa</th>
              <th>Évjárat</th>
              <th>Státusz</th>
              <th>Bérlés kezdete</th>
              <th>Bérlés vége</th>
              <th>Bérleti díj</th>
            </tr>
          </thead>
          <tbody id="tbody">
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
