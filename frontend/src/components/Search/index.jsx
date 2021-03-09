import './style.css';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { BsSearch } from 'react-icons/bs';

export default function Search({ query, onQueryChange, getData }) {

    return (
        <div className="Search">
            <span className="p-input-icon-right">
                <i onClick={() => getData()}>
                    <BsSearch />
                </i>

                <InputText
                    value={query}
                    onChange={onQueryChange}
                    placeholder=" " />
            </span>
        </div>
    );
}