import React from "react";

export default function Search({ query, onQueryChange, getData }) {
  return (
    <div className="container flex w-1/2">
      <div className="flex w-full">
        <input className="rounded-l-lg p-4 border-s mr-0 border-b border-s text-gray-400 border-gray-200 bg-white w-full"
          placeholder="Insert one location here"
          value={query || ''}
          onChange={onQueryChange} />
        <button
          className="px-8 rounded-r-lg bg-blue-200  text-gray-900 font-bold p-4 uppercase border-white border-4"
          onClick={() => getData()}>
          SEARCH
          </button>
      </div>
    </div>
  );

}
