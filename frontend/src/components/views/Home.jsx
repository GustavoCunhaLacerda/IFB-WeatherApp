import React from 'react';

import Title from '../Title';
import Search from '../Search';
import CitiesPreview from '../CitiesPreview';

export default function Home() {
    return (
        <div>
            <Title text="Previsão do Tempo" />
            <Search />
            <CitiesPreview />
        </div>
    );
}