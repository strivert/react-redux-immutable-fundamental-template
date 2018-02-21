import React from 'react';

const Counter = ({
  number,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrement}>Increase (+)</button>
      <button onClick={onDecrement}>Decrease (-)</button>
    </div>
  );
};

Counter.defaultProps = {
  number: 0
}

export default Counter;