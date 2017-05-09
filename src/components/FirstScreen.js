import React from 'react'
import { Button } from 'react-bootstrap'

export default props => {
  return (
		<div className="row">
	    <div className="col-xs-12 col-sm-12 col-md-4">
	      <div>
	      	<p className="text-primary"> Tell me whats wrong </p> 
	      	<p className="text"> (pick one)</p>
	      </div>
	      <div>
	        <div><Button bsStyle="primary" onClick={() => {props.history.push('sore-throat')}}>Sore Throat</Button></div>
	        <div><Button bsStyle="info">Fever</Button></div>
	        <div><Button bsStyle="warning">Stress</Button></div>
	        <div><Button bsStyle="success">Stomachache</Button></div>
	        <div><Button bsStyle="danger">Joint Pain</Button></div>
	      </div>
	    </div>
	 </div>
  )
}
