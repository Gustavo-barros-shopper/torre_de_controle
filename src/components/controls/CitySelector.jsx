import React from 'react';
import {Input} from 'reactstrap';
import {cities, states_cities} from '../../data/states_cities';

const CitySelector = (props) => {
    const citiesOptions = [];
    const dataSet = props.state ? states_cities[props.state] : cities;
    for (const city of dataSet) {
        const cityKey = props.state ? city.value : `${city.uf}-${city.value}`;
        citiesOptions.push(
            <option
                value={city.value}
                title={city.name}
                key={cityKey}
            >
                {city.name}
            </option>
        );
    }

    return (
        <Input type="select" {...props}>
            {citiesOptions}
        </Input>
    );
};

export default CitySelector;