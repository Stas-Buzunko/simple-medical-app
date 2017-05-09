import React from 'react';
import { Button, ButtonGroup, Panel } from 'react-bootstrap';

export default (props) => {

	let sum = 0
	props.radios.forEach((question)=>{
		if(question==2){
			sum = sum - 1
		}else{
			sum = sum + question
		}
	})

	let result = {}

	if(sum<=0){
		result = {percent: "1 - 2.5", advise: "Expect to not get any tests or antibiotics"}
	}else if(sum==1){
		result = {percent: "5 - 10", advise: "There is a chance you may get a rapid strep throat test"}
	}else if(sum==2){
		result = {percent: "11 - 17", advise: "Expect to get a rapid strep test and strep throat culture"}
	}else if(sum==3){
		result = {percent: "28 - 35", advise: "Expect to get a rapid strep test and strep throat culture"}
	}else if(sum>=4){
		result = {percent: "51 - 53", advise: "Expect to get a rapid strep test and strep throat culture"}
	}
		

  return (
    <div className="col-xs-12 col-sm-12 col-md-4">
      <Panel className="panel-top top">
      	<p className="text-primary">Your risk of having strep throat is:</p>
      	<Panel className="panel-per">
	      	<p className="text-per"> {result.percent} % </p>
	      </Panel>
	      <Panel className="panel-adv">
	      	<p className="text-primary"> {result.advise} </p>
	      </Panel>
	      <p className="text-warning">Make an appointment with Student Health?</p>
	      <ButtonGroup>
			    <Button bsStyle="info">Yes</Button>
				  <Button bsStyle="info">No</Button>
			  </ButtonGroup>
      </Panel>
    </div>
  )
}
