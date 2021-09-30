import React from 'react';
import {Input} from 'reactstrap';
import {states} from '../../data/states_cities';

const StateSelector = (props) => {
    const statesOptions = [];
    for (const state of states) {
        statesOptions.push(
            <option
                value={state.value}
                title={state.name}
                key={state.value}
            >
                {state.value}
            </option> );
    }
    return (
        <Input type="select" {...props}>
            {statesOptions}
        </Input>
    );
};

export default StateSelector;