import React from 'react'

export default props => {
  return (
    <div className="screen container">
      <div>Tell me whats wrong (pick one)</div>
      <div className="items">
        <div className="item"><button className="button" onClick={() => {props.history.push('sore-throat')}}>Sore Throat</button></div>
        <div className="item"><button className="button">Fever</button></div>
        <div className="item"><button className="button">Stress</button></div>
        <div className="item"><button className="button">Stomachache</button></div>
        <div className="item"><button className="button">Joint Pain</button></div>
      </div>
      first screen
    </div>
  )
}
