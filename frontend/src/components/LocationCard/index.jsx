import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function LocationCard({ data }) {
  if (data?.location != null) {
    return (
      <div className="LocationCard  flex items-center justify-center rounded-lg">
        <div className="rounded-lg bg-white m-5 p-10 w-1/3">
          <h3 className="grid text-lg justify-items-center mb-5 mt-2">
            {`${data?.location?.city}, ${data?.location?.region} - ${data?.location?.country}`}
          </h3>
          <h1 className="text-4xl grid justify-items-center mb-5">
            {`${data?.current_observation?.condition?.temperature
              }° ${data?.current_observation?.condition?.text}`}
          </h1>
          <div className="grid grid-flow-col grid-cols-2 justify-items-center mb-5">
            <h2 className="flex">
              {" "}
              <AiOutlineArrowUp className="arrowIcon" />
              {`${data?.forecasts?.[0].high}°`}
            </h2>
            <h2 className="flex">
              {" "}
              <AiOutlineArrowDown className="arrowIcon" />{" "}
              {`${data?.forecasts?.[0].low}°`}{" "}
            </h2>
          </div>
          <div className="grid grid-flow-col grid-cols-2 justify-items-center mb-5">
            <div className="">
              <h4>
                {" "}
                {`Wind: ${data?.current_observation?.wind?.speed} Km/h `}{" "}
              </h4>
            </div>
            <div className="">
              <h4>
                {" "}
                {`Humidity: ${data?.current_observation?.atmosphere?.humidity} %`}{" "}
              </h4>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-6 mb-2 justify-items-center">
            {data?.forecasts?.slice(1, 7).map((day, index) => {
              return (
                <div className="" key={index}>
                  <div className="">
                    <p className="">{day.day}</p>
                  </div>
                  <div className="flex">
                    <p className="">{day.low}°</p>
                    <p className="">{day.high}°</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="LocationCard">
        <div className="space"></div>
      </div>
    );
  }
}
