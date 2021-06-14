import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

const initialState = {};

const reducer = (state = initialState, action) => {
  const itemID = action.id;

  switch (action.type) {
    case 'INCREMENT':
      // eslint-disable-next-line no-case-declarations
      const newItemAmount = itemID in state ? state[itemID] + 1 : 1;
      return {
        ...state,
        [itemID]: newItemAmount,
      };
    case 'DECREMENT':
      if (state?.[itemID] > 0) {
        return {
          ...state,
          [itemID]: state[itemID] - 1,
        };
      }
      return state;
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
