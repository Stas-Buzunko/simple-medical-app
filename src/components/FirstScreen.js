import React from 'react'
import { Button } from 'react-bootstrap'

export default (props) => {
  return (
  	<div className="row">
	  	{ props.loginPage ?
			    <div className="col-xs-12 col-sm-12 col-md-4 center-block" style={{height: '100vh'}}>
			      <div style={{height: '10%', marginTop: '25px'}}>
			      	<p className="text-primary" style={{fontSize: '36px', color:'#00cccc'}}> Welcome to </p> 
			      </div>
			      <div style={{height: '30%', marginTop: '50px', }}>
			      	<p className="text-primary" style={{fontSize: '86px', textDecoration: 'underline', textDecorationColor: '#337ab7'}}>Fix Me</p>
			      </div>
			      <div style={{height: '60%', width: '80%', margin: 'auto'}}>
			        <div className="btn-container"><Button bsStyle="primary" bsSize="large" onClick={() => {props.changePage()}}>Continue to login to your account</Button>
			        </div>
			      </div>
			    </div>
	  	: 
				
			    <div className="col-xs-12 col-sm-12 col-md-4 center-block" style={{height: '100vh'}}>
			      <div style={{height: '7%'}}>
			      	<p className="text-primary" style={{fontSize: '26px'}}> Tell me whats wrong </p> 
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
			}
		 </div>
  )
}
