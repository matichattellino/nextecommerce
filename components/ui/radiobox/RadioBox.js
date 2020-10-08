import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup } from "@chakra-ui/core";

const RadioBox = ({ prices, handleFilters }) => {
    const [ value, setValue ] = useState(1);

    const handleChange = e => {
        handleFilters(e.target.value)
        setValue(e.target.value)
    }

    return ( 
             prices.map((price, index) => (
                <div key={index}>
                    <RadioGroup onChange={handleChange} value={value}>
                        <Radio value={`${price._id}`}>{price.name}</Radio>
                    </RadioGroup>
                </div>
              ))
     );
}
 
export default RadioBox;