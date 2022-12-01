import * as React from "react";
import * as PropTypes from "prop-types";
import { createContext, useMemo, useReducer, Dispatch } from "react";
import { Reducers, Actions } from "./Reducer";

type InitialStateType = {
  breedDetails: { [key: string]: any };
  filteredBreedDetails: { [key: string]: any }[];
  showError: boolean;
};

const initialState = {
  breedDetails: {},
  filteredBreedDetails: [],
  showError: false
};

const defaultProps = {
  children: null,
};

export const GlobalContext = createContext<{
  contextState: InitialStateType;
  dispatch: Dispatch<Actions>;
}>({
  contextState: initialState,
  dispatch: () => null,
});

function Store({ children }) {
  const [contextState, dispatch] = useReducer(Reducers, initialState);
  const globalContextValues = useMemo(
    () => ({ contextState, dispatch }),
    [contextState]
  );

  return (
    <GlobalContext.Provider value={globalContextValues}>
      {children}
    </GlobalContext.Provider>
  );
}

Store.defaultProps = defaultProps;

Store.propTypes = {
  children: PropTypes.any,
};

export default Store;
