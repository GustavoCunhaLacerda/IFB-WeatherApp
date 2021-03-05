import './style.css';
import React, { useState } from 'react';

export default function Search() {

    const [search, setSearch] = useState("Insira uma localização");

    return (
        <div className="Search">
            <input type="text"
                value={search}
                onChange={ e => setSearch(e.target.value)} />
        </div>
    );
}