import { useAppliedFiltersContext } from '../../context';
import'./AppliedFiltersBar.scss'

const AppliedFiltersBar = () => {
    const { appliedOptions, setAppliedOptions } = useAppliedFiltersContext();
    
    const isEmpty = appliedOptions.length === 0;

    const onCloseApplied = () => {
        let newEmptyApplied = [];
        setAppliedOptions([...newEmptyApplied])
    }

    const onDeleteApplied = (id) => {
        const index = appliedOptions.findIndex((el) => el.id === id)

        const newApplied = [
            ...appliedOptions.slice(0, index),
            ...appliedOptions.slice(index + 1)
        ]
        return setAppliedOptions([...newApplied])

    }

    const appliedFilterList = appliedOptions.map((filter) => {
        const { id, title } = filter;
        
        return (
            <li key={id} className='applied__item'>
                {title}
                <span className='applied__close'
                onClick={ () => onDeleteApplied(id) } 
                > x </span>
            </li>
        )
    })

    return (
        <div className='applied'>
            <div className='applied-wrapper'>
                <h3 className='applied__header'>
                    Applied Filters:
                </h3>
                <ul className='applied__list'>
                    {appliedFilterList}
                    { isEmpty ?  <span> -none- </span> : ''}
                </ul>
                <div className='applied__controls'>
                    <button className='applied__close-all'
                        onClick={ () => onCloseApplied() }
                        onKeyPress={ () => onCloseApplied() } >
                        Close All
                    </button>      
                </div>
            </div>    
        </div>
    )
}

export default AppliedFiltersBar;