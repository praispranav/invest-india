import React, { useEffect, useState } from "react";
import { States, MapType } from "./states";

const MAP_AREA = "0 0 650 696";

const IndiaMap = () => {
  const [indiaMap, setIndiaMap] = useState<MapType[]>([]);

  // const statesColors = {
  //   an:{
  //     name: "Andaman and Nicobar Islands",
  //     border: "black"
  //   }
  // }

  // useEffect(()=> {
  //  const andhraPradesh = window.document.getElementById("an")
  //  andhraPradesh.addEventListener('mouseover', (event) => {
  //    console.log(event)
  //  })
  //  console.log(andhraPradesh)
  // })
  useEffect(() => {
    setIndiaMap(States);
  }, []);
  return (
    <div className="m-4 mt-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={MAP_AREA}
        aria-label="Map of India"
      >
        {indiaMap.map((state: MapType) => (
          <path d={state.d} id={state.id} />
        ))}
      </svg>
    </div>
  );
};

export default IndiaMap;
