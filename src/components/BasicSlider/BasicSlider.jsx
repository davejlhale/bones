import React from "react";
import { useState, useEffect } from "react";
import { Container } from './BasicSlider.styles';
import { useCallback } from 'react';
import Tooltip from "../Tooltip/Tooltip";
const BasicSlider = ({ action, currencies }) => {
    
    //set states
    const [completeTime] = useState(action.timeToComplete)
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState()
    const [buttonColour, setButtonColour] = useState("red");

    const checkAfford = useCallback(() => {
        let afford = true; //set true
        //loop through all costs
        Object.entries(action.costs).forEach(([key, val]) => {
            if (currencies[key].value > val) {
                console.log(`can afford ${val} of ${key}. i have ${currencies[key].value}`);
                // currencies[key].value -= val;  
            } else {
                console.log("cant afford");
                afford = false; //turn off afford if any fail
                stopAction();
            }
        });
        //if can still afford
        if (afford) {
            //loop through costs and reduce relevant currencies
            Object.entries(action.costs).forEach(([key, val]) => {
                currencies[key].value -= val;
            });
        }
        return afford;
    },[action.costs,currencies]);


    useEffect(() => {

        const reStartCount = (num) => {
            if (num >= completeTime) {
                //update reward of action
                //change lerp transition css (?)
                num = 0
                setRunning(checkAfford());
            } else {
                //change lerp transition css (?)
                num++;
            }
            return num
        }

        const id = setInterval(() => {
            if (running) {
                setTimer((oldCount) => reStartCount(oldCount));
            }
        }, 1000);

        return () => { clearInterval(id); };

    }, [running, completeTime,checkAfford]);

    

    const startAction = () => {
        setRunning(true);
        console.log("started");
        setButtonColour("green");
    }
    const stopAction = () => {
        setRunning(false);
        console.log("stopped");
        setButtonColour("red");
    }
    const handleClick = () => {
        if (running) {
            stopAction();
        } else {
            //if timer>0 ? start : else if can afford ? start else nothing
            let temp =  timer > 0 ? startAction() : checkAfford() ? startAction() : {}
            console.log(temp);
        }
    }

let reqs = "Each Action Costs\n"
let nl = "\n"
Object.entries(action.costs).forEach(([key, val]) => {
    reqs+= `${val} ${key} ${nl}`
})
return (

    <Container  onClick={() => handleClick()}>
        <Tooltip text={reqs} >
        <p  id={buttonColour}>{action.name}</p>
        </Tooltip>
        <div className="barWrapper">
        
            <div className="barContainer">
            
                <div className="bar" style={{ width: (timer / completeTime) * 100 + '%' }}>
                    
                </div>
                
            </div>
            
        </div>
    </Container>
   

)

}

export default BasicSlider