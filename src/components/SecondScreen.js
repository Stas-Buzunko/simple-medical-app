import React from 'react'

export default ({ radios }) => {

  return (
    <div className="screen container col-sm-9 align-items-center">
      <div className="row justify-content-center" >Sorry to hear your throat hurts! I just have a few questions for you:</div>
      <div className="row w-100 category">what is your age?
        <label>3 - 14 years<input type="radio" checked={radios[0] === '1'} /></label>
        <label>15 - 44 years<input type="radio" checked={radios[0] === '2'} /></label>
        <label>{'>'} 45 years<input type="radio" checked={radios[0] === '3'} /></label>
      </div>
      <div className="row w-100 category">Is there pus or swelling in the back of your throat? i
        <button>Yes</button>
        <button>No</button>
      </div>
      <div className="row w-100 category">Are your lymph nodes swollen or tender? i
        <button>Yes</button>
        <button>No</button>
      </div>
      <div className="row w-100 category">When you take your temperature, is it {'>'} 38C or 100.4F?
        <button>Yes</button>
        <button>No</button>
      </div>
      <div className="row w-100 category">Do your have a cough?
        <button>Yes</button>
        <button>No</button>
      </div>
      <div className="row w-100 category">
        <button>Fix me</button>
      </div>
      second screen
    </div>
  )
}
