import React from "react";
import { useState, useEffect } from "react";
import {Container} from './BasicSlider.styles'

const BasicSlider = ({action} ) => {

    //set states
    const [completeTime] = useState(action.timeToComplete)
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState()


    useEffect(() => {

        const reStartCount = (num) => { 
            if (num>=completeTime) {
                //update reward of action
                //change lerp transition css (?)
                num =0
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

    }, [running,completeTime]);



    const handleClick = () => {
        if (running) {
            setRunning(false);
            console.log("stopped");

        } else {
            setRunning(true);
            console.log("started");
        }
    }


    return (
        <>
            <Container onClick={() => handleClick()}>
                <p>{action.name}</p>
                <div className="barWrapper">
                    <div className="barContainer">
                        <div className="bar" style={{ width: (timer / completeTime) * 100 + '%' }}>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )

}

export default BasicSlider