import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";

const CheckBox = ({ categories, handleFilters }) => {
    const [ checked, setChecked ] = useState([]);


    const handleToggle = category => {
        //return the first index 
        const curentCategoryId = checked.indexOf(category)
        const newCheckedCategoryId = [...checked]
        //if currently checked was not already in checked state > push
        //else pull 
        if(curentCategoryId === -1){
          newCheckedCategoryId.push(category)
        } else {
          newCheckedCategoryId.splice(curentCategoryId, 1)
        }
        setChecked(newCheckedCategoryId);
        handleFilters(newCheckedCategoryId);
    }; 

    return ( 
            categories.map(category => (
                <div key={category._id}>
                  <CheckboxGroup 
                      variantColor="gray" 
                      onChange={() => handleToggle(category._id)}
                  >
                      <Checkbox 
                        value="naruto"     
                        value={checked.indexOf(category._id === -1)}
                      >
                        {category.name}
                      </Checkbox>
                  </CheckboxGroup>
                </div>
              ))
    );
}
 
export default CheckBox;