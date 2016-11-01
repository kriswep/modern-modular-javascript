import React from 'react'

const Barker = ({props}) => {
  function bark () { console.log(`Woof, I am ${props.name}`)};

  return (
    <button onClick={(e) => {
          bark();
        } }>Bark</button>
  )  
}
export default Barker;
