import React from 'react'

const Driver = ({props}) => {
  function drive () {
    props.position = props.position + props.speed;
   };

  return (
    <div/>
  )  
}
export default Driver;
