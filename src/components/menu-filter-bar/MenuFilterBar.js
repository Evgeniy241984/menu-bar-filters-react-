import React, { useEffect, useRef } from 'react';
import {useState} from 'react';
import { useFilterContext } from '../../context';
import DropdownOptionsList from '../dropdown-options-list';
import onClickOutside from "react-onclickoutside";
import './MenuFilterBar.scss';

const MenuFilterBar = () => {    
    const {currentFilters} = useFilterContext();
    const [openDropDown, setOpenDropDown] = useState(null);
    

    const openDropDownHandler = (label) => {
        if (label === openDropDown) return setOpenDropDown(null);
        setOpenDropDown(label);
    };
    
    const keys = Object.keys(currentFilters);
    const elements = keys.map((filterName) => {
        const isOpen = openDropDown === filterName;

        let itemLiClassName = "filter-menu__item";
        
        if( isOpen) {
            itemLiClassName += ' open';
        }
        

        return (
            <li key={ filterName } className={itemLiClassName}>
                <button type="button"
                    onClick={() => openDropDownHandler(filterName)}>
                        {filterName}
                </button>
                {isOpen && <DropdownOptionsList filterName = {filterName} />} 
            </li>
        );            
    });  
 
    return (
        <div className="menu-bar">
            <ul className="filter-menu-list">
                {elements}
            </ul>       
        </div>
    );
};

export default MenuFilterBar;