import React from 'react';

const Ingredient = (props) => {
  return (
  <div className="ingredient">
    {props.children}
  </div>
  )
};

export default Ingredient;