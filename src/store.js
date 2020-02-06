import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const initialState = {
  // grid has an arr, Array creates the row arr with 20 or n things inside.
  grid: [
    Array(20).fill('')
  ],
  selectedColor: 'red'
};


// action type
const ADD_ROW = 'ADD_ROW';
const SELECTED_COLOR = 'SELECTED_COLOR';
const DRAWING_COLOR = 'DRAWING_COLOR';

// action creator
export const addRow = () => ({type: ADD_ROW});
export const selectedColor = (color) => ({type: SELECTED_COLOR, color});
export const drawingColor = (row, column) => ({type: DRAWING_COLOR, row, column});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      // we want to assemble a new row into our grid;
      // ...state returns the entire initial state object but a copy;
      // then we can replace the copy with itself and a new row;
      return {...state, grid: [...state.grid, Array(20).fill('')]};

    case SELECTED_COLOR:
      return {...state, selectedColor: action.color};

    case DRAWING_COLOR:
      // make a copy of the grid, then make a copy of the specific row where the current event click happened, then edit that row. by that time its a deep copy;
      const gridCopy = state.grid.slice();
      gridCopy[action.row] = gridCopy[action.row].slice();
      gridCopy[action.row][action.column] = state.selectedColor;
      return {...state, grid: gridCopy};

    default:
      return state;
  }


}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
