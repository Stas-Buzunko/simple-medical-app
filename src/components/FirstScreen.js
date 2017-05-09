import React from 'react'
import { Button } from 'react-bootstrap'

export default props => {
  return (
		<div className="row">
	    <div className="col-xs-12 col-sm-12 col-md-4 center-block" style={{height: '100vh'}}>
	      <div style={{height: '7%'}}>
	      	<p className="text-primary"> Tell me whats wrong </p> 
	      	<p className="text">(pick one)</p>
	      </div>
	      <div style={{height: '90%'}}>
	        <div className="btn-container"><Button bsStyle="primary" bsSize="large" onClick={() => {props.history.push('sore-throat')}}>Sore Throat</Button></div>
	        <div className="btn-container"><Button bsStyle="info" bsSize="large">Fever</Button></div>
	        <div className="btn-container"><Button bsStyle="warning" bsSize="large">Stress</Button></div>
	        <div className="btn-container"><Button bsStyle="success" bsSize="large">Stomachache</Button></div>
	        <div className="btn-container"><Button bsStyle="danger" bsSize="large">Joint Pain</Button></div>
	      </div>
	    </div>
	 </div>
  )
}
