import React from "react";
import { VectorMap } from "react-jvectormap";
import { continents, countries, languages } from "countries-list";
import {
  getCountryCode,
  getCountryData,
  getCountryDataList,
  getEmojiFlag,
} from "countries-list";

import { getCode, getName } from "country-list";

const mapData = {
  UZ: 1000,
};
const marker = [{ latLng: [41.9, 12.45], name: "Uzbekistan" }];
console.log(getCountryData())
console.log(getCountryDataList())
console.log(getEmojiFlag())
const handleClick = (e, countryCode, ) => {
  console.log(countryCode);
  getCountryData("UZ")
};

const WorldMap = () => {
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="#0077be" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "520px",
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        onRegionTipShow={""}
        markers={marker}
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "#8DD3BB", //color for the clicked country
          },  
          selectedHover: {},
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial",
            },  
          ],
        }}
      />
    </div>
  );
};

export default WorldMap;
