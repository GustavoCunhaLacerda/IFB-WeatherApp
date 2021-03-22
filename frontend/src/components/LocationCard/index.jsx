import './style.css';
import React, { useEffect } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export default function LocationCard({ data }) {
    const dayNameToPT = function (dayName) {
        switch (dayName) {
            case 'Mon':
                return 'Seg';
                break;
            case 'Tue':
                return 'Ter';
                break;
            case 'Wed':
                return 'Qua';
                break;
            case 'Thu':
                return 'Qui';
                break;
            case 'Fri':
                return 'Sex';
                break;
            case 'Sat':
                return 'Sáb';
                break;
            case 'Sun':
                return 'Dom';
                break;
            default:
                break;
        }
    }

    const statusTextToPT = function (statusText) {
        switch (statusText) {
            case 'Rain':
                return 'Chuva'
                break;
            case 'Thunderstorms':
                return 'Tempestade'
                break;
            case 'Mostly Cloudy':
                return 'Sol Com Nuvens'
                break;
            case 'Partly Cloudy':
                return 'Parcialmente Nublado'
                break;
            case 'Cloudy':
                return 'Nublado'
                break;
            case 'Sunny':
                return 'Ensolarado'
                break;
            case 'Clear':
                return 'Céu Limpo'
                break;
            case 'Mostly Sunny':
                return 'Ensolarado'
                break;
        
            default:
                return statusText;
                break;
        }
    }

    if (data?.location != null) {
        return (
            <div className="LocationCard">
                <div className="card">
                    <h3 className="text-center">
                        {`${data?.location?.city}, ${data?.location?.region} - ${data?.location?.country}`}
                    </h3>
                    <h1 className="text-center">
                        {`${data?.current_observation?.condition?.temperature}° ${statusTextToPT(data?.current_observation?.condition?.text)}`}
                    </h1>
                    <div className="grid-x text-center">
                        <div className="cell small-6">
                            <h2> <AiOutlineArrowDown className="arrowIcon"/> {`${data?.forecasts?.[0].low}°`}   </h2>
                        </div>
                        <div className="cell small-6">
                            <h2> <AiOutlineArrowUp className="arrowIcon"/>{`${data?.forecasts?.[0].high}°`}</h2>
                        </div>
                    </div>
                    <div className="grid-x text-center">
                        <div className="cell small-6">
                            <h4> {`Vento: ${data?.current_observation?.wind?.speed} Km/h `} </h4>
                        </div>
                        <div className="cell small-6">
                            <h4> {`Humidade: ${data?.current_observation?.atmosphere?.humidity} %`} </h4>
                        </div>
                    </div>
                    <div className="grid-x align-center">
                        <div className="cell style17"></div>
                    </div>
                    <div className="grid-x text-center grid-padding-x days">
                        {data?.forecasts?.slice(1, 7).map((day, index) => {
                            return (
                                <div className="cell auto">
                                    <div className="grid-x" key={index}>
                                        <div className="cell">
                                            <p className="dayName">{ dayNameToPT(day.day) }</p>
                                        </div>
                                        <div className="cell">
                                            <div className="grid-x grid-padding-x align-center">
                                                <div className="cell small-4"><p className="dayLow">{day.low}°</p></div>
                                                <div className="cell small-4"><p className="dayHigh">{day.high}°</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="LocationCard">
                <div className="space">

                </div>
            </div>
        )
    }

}