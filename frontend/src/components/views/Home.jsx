import React, { useState } from "react";

import Title from "../Title";
import Search from "../Search";
// import CitiesPreview from '../CitiesPreview';
import LocationCard from "../LocationCard";
// import UserButtons from "../UserButtons";

import { GET_ALL } from "../../api";

export default function Home() {
	const [query, setQuery] = useState(null);
	const [data, setData] = useState(null);

	async function getData() {
		let response;
		let json;
		const { url, headers } = GET_ALL(query);
		response = await fetch(url, { headers });
		json = await response.json();
		if (json.forecasts.length === 0) {
			setData(null);
			alert("Local não encontrado!");
		}
		else {
			console.log(json);
			setData(json);
		}
	}

	const handleQueryChange = function (event) {
		setQuery(event.target.value);
	};

	return (
		<div className="container align-middle h-vh">
			{/* <div className="grid-x">
				<div className="cell text-center">
					<Title text="Previsão do Tempo" />
				</div>

				<div className="cell">
					<LocationCard query={query} data={data} />
				</div>

				<div className="cell text-center">
					<Search
						onQueryChange={handleQueryChange}
						query={query}
						getData={getData}
					/>
				</div>
			</div> */}

			<div className="container">
				<Title text="Weather Forecast" />
			</div>
			<div className="cell">
				<LocationCard query={query} data={data} />
			</div>
			<div className="container">
				<Search
					onQueryChange={handleQueryChange}
					query={query}
					getData={getData}
				/>
			</div>
		</div>
	);
}
