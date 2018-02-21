// Counter Related Status Logic
import { createAction, handleActions } from 'redux-actions';
// action type
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// action creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// init state
const initialState = {
  number: 0
};

// reducers
export default handleActions({
  [INCREMENT]: (state, action) => {
    return { number: state.number + 1};
  },
  [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);