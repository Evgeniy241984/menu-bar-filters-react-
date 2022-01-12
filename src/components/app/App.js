import { FcFilledFilter } from 'react-icons/fc';
import { useState } from 'react';
import { MenuBarFilterContext } from "../../context";
import { AppliedFiltersContext } from  "../../context";
import { filtersData } from '../../data/filter-data';
import MenuFilterBar from "../menu-filter-bar";
import AppliedFiltersBar from '../applied-filters-bar';


import './App.scss';

function App() {
  const [ filters ] = useState(filtersData);
  const [ appliedOptions, setAppliedOptions ] = useState([]);
  

    return (
      <div className="App">
        <header className="App-header">
          <FcFilledFilter className="App-logo" alt="logo" />   
        </header>

        <AppliedFiltersContext.Provider value={ {appliedOptions, setAppliedOptions} }>
          
          <MenuBarFilterContext.Provider value={ {filters} }>
            <MenuFilterBar />
          </MenuBarFilterContext.Provider>

          <AppliedFiltersBar />

        </AppliedFiltersContext.Provider>
      </div>
    );

};

export default App;
