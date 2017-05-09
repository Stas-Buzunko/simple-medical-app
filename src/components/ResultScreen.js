import React from 'react';
import { Button, PageHeader } from 'react-bootstrap';

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
    <div className="col-xs-12 col-sm-12 col-md-4 center-block">
    	<PageHeader style={{textAlign: 'center', color: '#337ab7'}}>Your risk of having strep throat is:</PageHeader>
      <div style={{textAlign: 'center'}}>
        <h1><strong>{result.percent} %</strong></h1>
      </div>
      <p className="text-primary" style={{fontSize: '22px'}}> {result.advise} </p>
      <p className="text-warning">Make an appointment with Student Health?</p>
	    <Button bsStyle="success" bsSize="large">Yes</Button>
		  <Button bsStyle="warning" bsSize="large">No</Button>
    </div>
  )
}
