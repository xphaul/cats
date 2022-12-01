type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ReducerTypes {
  ChooseBreed = `CHOOSE_BREED`,
  FilteredBreed = `FILTERED_BREED`,
  ShowError = `SHOW_ERROR`
}

type PayloadTypes = {
  [ReducerTypes.ChooseBreed]: object;
  [ReducerTypes.FilteredBreed]: object;
  [ReducerTypes.ShowError]: boolean;
};

export type Actions = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];

export const Reducers = (state, action) => {
  switch (action.type) {
    case ReducerTypes.ChooseBreed:
      return {
        ...state,
        breedDetails: action.payload,
      };
    case ReducerTypes.FilteredBreed:
      return {
        ...state,
        filteredBreedDetails: action.payload,
      };
    case ReducerTypes.ShowError:
      return {
        ...state,
        showError: action.payload,
      };
    default:
      return state;
  }
};
