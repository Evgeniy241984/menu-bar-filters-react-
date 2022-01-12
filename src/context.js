import { createContext, useContext } from "react";

export const MenuBarFilterContext = createContext({});
export const useMenuBarFilterContext = () => useContext(MenuBarFilterContext);

export const AppliedFiltersContext = createContext({});
export const useAppliedFiltersContext = () => useContext(AppliedFiltersContext);