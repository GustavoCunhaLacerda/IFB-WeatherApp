import React, { useState } from 'react';

import Title from '../Title';
import Search from '../Search';
import CitiesPreview from '../CitiesPreview';
import LocationCard from '../LocationCard';

import { GET_ALL } from '../../api';

export default function Home() {

    const appStyle = {
        background: 'linear-gradient(to bottom, #4e65ff, #92effd)',
        width: '100vw',
        height: '100vh'
    }

    const [query, setQuery] = useState("a");
    const [data, setData] = useState(null);

    async function getData() {
        let response;
        let json;
        const { url, headers } = GET_ALL(query);
        response = await fetch(url, { headers });
        json = await response.json();
        if (json.forecasts.length === 0) throw new Error("Essa pesquisa não retornou resultado");
        else {
            console.log(json);
            setData(json);
        }
    }

    const handleQueryChange = function (event) {
        setQuery(event.target.value);
    }

    return (
        <div className="Home" style={appStyle}>
            <div className="grid-x">
                <div className="cell text-center">
                    <Title text="Previsão do Tempo" />
                </div>

                <div className="cell">
                    <LocationCard
                        query={query}
                        data={data} />
                </div>

                <div className="cell text-center">
                    <Search
                        onQueryChange={handleQueryChange}
                        query={query}
                        getData={getData} />
                </div>
            </div>
        </div>
    );
}