import React, { useEffect, useRef } from 'react';
import {useState} from 'react';
import { useMenuBarFilterContext } from '../../context';
import FilterItemDropdown from '../filter-item-dropdown';
import onClickOutside from "react-onclickoutside";
import './MenuFilterBar.scss';

const MenuFilterBar = () => {    
    const {filters} = useMenuBarFilterContext();
    const [openDropDown, setOpenDropDown] = useState(null);
    

    const openDropDownHandler = (label) => {
        if (label === openDropDown) return setOpenDropDown(null);
        setOpenDropDown(label);
    };
    
    const keys = Object.keys(filters);
    const filtersList = keys.map((filterName) => {

        const isOpen = openDropDown === filterName;

        let filterButtonClassName = 'filter-menu__button';
        
        if(isOpen) {
            filterButtonClassName += ' open';
        }
        

        return (
            <li key={ filterName } className='filter-menu__item'>
                <button className = { filterButtonClassName }
                    type="button"
                    onClick={() => openDropDownHandler(filterName)}
                    onKeyPress={() => openDropDownHandler(filterName)}>
                        {filterName}
                </button>
                {isOpen && <FilterItemDropdown filterName = {filterName} />} 
            </li>
        );            
    });  
 
    return (
        <div className="filter-menu">
            <ul className="filter-menu__list">
                {filtersList}
            </ul>       
        </div>
    );
};

export default MenuFilterBar;