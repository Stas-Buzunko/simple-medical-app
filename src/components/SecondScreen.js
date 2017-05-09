import React from 'react';
import { Button, ButtonGroup, OverlayTrigger, Popover, ButtonToolbar } from 'react-bootstrap';
import img1 from '../img/Picture 1.JPG';
import img2 from '../img/Picture 2.jpg';

export default (props) => {
	
	const infoFirst = (
	  <Popover id="popover-trigger-focus">
	    <img className="col-xs-12 col-sm-12 col-md-8" src={img1}/>
	  </Popover>
	)

	const infoSecond = (
	  <Popover id="popover-trigger-focus">
	    <img className="col-xs-12 col-sm-12 col-md-8" src={img2}/>
	  </Popover>
	)

  const customButtonStyle = {
    width: '50%',
    textAlign: 'center',
    height: '100%'
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-4 center-block" style={{height: '100vh'}}>
      <div className="row" style={{height: '10%'}}>
      	<p className="text-primary">Sorry to hear your throat hurts! I just have a few questions for you:</p>
      </div>
      <table className="table" style={{height: '80%'}}>
      	<tbody>
      		<tr className="question-container">
      			<td className="question-text">
				      What is your age? 
					  </td>
					  <td className="td-yes-no">
				      <ButtonGroup vertical>
							  <Button bsStyle="primary" bsSize="small" onClick={()=>props.onClick(0, 1)} active={props.radios[0]==1}>3 - 14 years</Button>
							  <Button bsStyle="primary" bsSize="small" onClick={()=>props.onClick(0, 0)} active={props.radios[0]==0}>15 - 44 years</Button>
							  <Button bsStyle="primary" bsSize="small" onClick={()=>props.onClick(0, 2)} active={props.radios[0]==2}>{'>'} 45 years</Button>
						  </ButtonGroup>
						</td>	
					</tr>
					<tr className="question-container">
      			<td className="question-text">
							Is there pus or swelling in the back of your throat? 
							<OverlayTrigger trigger={['hover', 'click']} rootClose placement="bottom" overlay={infoFirst}>
					      <span className="glyphicon glyphicon-info-sign" style={{cursor: 'pointer', marginLeft: '0.5rem'}}></span>
					    </OverlayTrigger>
						</td>
						<td className="td-yes-no">
				      <ButtonGroup>
						    <Button bsStyle="info" onClick={()=>props.onClick(1, 1)} active={props.radios[1]==1} style={customButtonStyle}>Yes</Button>
							  <Button bsStyle="info" onClick={()=>props.onClick(1, 0)} active={props.radios[1]==0} style={customButtonStyle}>No</Button>
						  </ButtonGroup> 
			      </td>
			    </tr>
			    <tr className="question-container">
      			<td className="question-text">
			    		Are your lymph nodes swollen or tender?
			    		<OverlayTrigger trigger={['hover', 'click']} rootClose placement="bottom" overlay={infoSecond}>
					      <span className="glyphicon glyphicon-info-sign" style={{cursor: 'pointer', marginLeft: '0.5rem'}}></span>
					    </OverlayTrigger>
			    	</td>
						<td>
			        <ButtonGroup>
						    <Button bsStyle="warning" onClick={()=>props.onClick(2, 1)} active={props.radios[2]==1} style={customButtonStyle}>Yes</Button>
							  <Button bsStyle="warning" onClick={()=>props.onClick(2, 0)} active={props.radios[2]==0} style={customButtonStyle}>No</Button>
						  </ButtonGroup>
			      </td>
			    </tr>
					<tr className="question-container">
      			<td className="question-text">
			    		When you take your temperature, is it {'>'} 38C or 100.4F?
			      </td>
						<td>  
			        <ButtonGroup>
						    <Button bsStyle="success" onClick={()=>props.onClick(3, 1)} active={props.radios[3]==1} style={customButtonStyle}>Yes</Button>
							  <Button bsStyle="success" onClick={()=>props.onClick(3, 0)} active={props.radios[3]==0} style={customButtonStyle}>No</Button>
						  </ButtonGroup>
			     	</td>
			    </tr>
			    <tr className="question-container">
      			<td className="question-text">
	    				Do your have a cough?
	    			</td>
					<td>
		        <ButtonGroup>
					    <Button bsStyle="danger" onClick={()=>props.onClick(4, 0)} active={props.radios[4]==0} style={customButtonStyle}>Yes</Button>
						  <Button bsStyle="danger" onClick={()=>props.onClick(4, 1)} active={props.radios[4]==1} style={customButtonStyle}>No</Button>
					  </ButtonGroup>
	      	</td>
			   </tr>
      	</tbody>
			</table>
      <div className="row w-100 category" style={{height: '5%', width: '60%', margin: 'auto'}}>
        <Button bsStyle="primary" bsSize="large" disabled={props.radios.includes(null)} onClick={() => {props.history.push('result-throat')}}>Fix me</Button>
      </div>
    </div>
  )
}
