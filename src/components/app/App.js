import { FcFilledFilter } from 'react-icons/fc';
import { useState } from 'react';
import { FilterContext } from "../../context";
import MenuFilterBar from "../menu-filter-bar";
import  filterData from '../../data/filter-data';

import './App.scss';

function App() {
  const [ currentFilters ] = useState(filterData)
 
    return (
      <div className="App">
        <header className="App-header">
          <FcFilledFilter className="App-logo" alt="logo" />   
        </header>

        <FilterContext.Provider value={{currentFilters}}>
          <MenuFilterBar />
        </FilterContext.Provider>
      </div>
    )

}

export default App;
