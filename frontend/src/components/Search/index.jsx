import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Search({ query, onQueryChange, getData }) {
  return (
    <div className="container flex w-1/2">
      <span className="p-input-icon-right w-full">
        <i onClick={() => getData()}>
          <BsSearch />
        </i>

        <input
          className="block appearance-none bg-white placeholder-gray-600 border border-indigo-200 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-400 focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-200 object-center w-full"
          value={query}
          onChange={onQueryChange}
          placeholder="Insira uma localização aqui" />
      </span>
    </div>
  );
}
