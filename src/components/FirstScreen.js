import React from 'react'

export default props => {
  return (
    <div className="screen container col-sm-9 align-items-center">
      <div className="row justify-content-center" >Tell me whats wrong (pick one)</div>
      <div className="row" ><button className="category" onClick={() => {props.history.push('sore-throat')}}>Sore Throat</button></div>
      <div className="row" ><button className="category ">Fever</button></div>
      <div className="row" ><button className="category">Stress</button></div>
      <div className="row" ><button className="category">Stomachache</button></div>
      <div className="row" ><button className="category">Joint Pain</button></div>
      first screen
    </div>
  )
}
