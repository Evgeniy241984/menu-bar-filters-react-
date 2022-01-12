import {useState} from 'react';
import { useMenuBarFilterContext } from '../../context';
import { useAppliedFiltersContext } from '../../context';
import './FilterItemDropdown.scss';

const FilterItemDropdown = ({filterName}) => {
    const { filters } = useMenuBarFilterContext();
    const { appliedOptions, setAppliedOptions } = useAppliedFiltersContext();
    const [ selectedOptions, setSelectedOptions ] = useState([]);

    const onSelectHandler = (option) => {
        if(!selectedOptions.some(current => current.id === option.id)) {
                setSelectedOptions([...selectedOptions, option])
        } else {
            let selectedAfterRemoval = selectedOptions;
            selectedAfterRemoval = selectedAfterRemoval.filter(
                current => current.id !== option.id
            );
            setSelectedOptions([...selectedAfterRemoval])
        } 
    }; 

    const isOptionSelected  = (option) => {
        if (selectedOptions.find(current => current.id === option.id)) {
            return true;
        } else return false;
    };

    const onCancelSelection = () => {
        let newEmptySelect = [];
        setSelectedOptions([...newEmptySelect])
    }
    
    const onApplySelected = ( selectedOptionsList ) => {

        let newOptions = selectedOptionsList.filter(option => appliedOptions.every(applied => applied.title !== option.title));
        
        const newApplied = [...appliedOptions, ...newOptions];

        return setAppliedOptions(newApplied);
    };

    const optionsList = filters[filterName].map((filterOption) => {
        const { id, title } = filterOption;


        return (
            <li key={id} className='dropdown__item'>
                <button 
                    type="button"
                    className={ isOptionSelected(filterOption) ? 'dropdown__option selected' : 'dropdown__option'}
                    onClick={ () => onSelectHandler(filterOption) }
                    onKeyPress={ () => onSelectHandler(filterOption) }>
                        {title}
                </button>    
            </li>       
        );            
    }); 

    return (
        <div className="dropdown-wrapper">
            <ul className="dropdown__list">
                {optionsList}
            </ul>
            <div className="dropdown__control">
                <button
                    type="button" 
                    className="control__cancel"
                    onClick={ () => onCancelSelection() }
                    onKeyPress={ () => onCancelSelection() }>
                    Cancel
                </button> 
                <button
                    type="button" 
                    className="control__apply"
                    onClick={ () => onApplySelected(selectedOptions) }
                    onKeyPress={ () => onApplySelected(selectedOptions) }>
                    Apply
                </button> 
            </div>     
        </div>
    );
};

export default FilterItemDropdown;