import {useState} from 'react';
import { useFilterContext } from '../../context';

const DropdownOptionsList = ({filterName}) => {
    const {currentFilters} = useFilterContext();
    
    const elements = currentFilters[filterName].map((options) => {
        const { id, title } = options;
                
        return (
            <li key={id}>
                <button>
                    {title}
                </button>    
            </li>       
        );            
    }); 

    return (
        <>
                <ul>
                    {elements}
                </ul> 
        </>
    );
};

export default DropdownOptionsList;