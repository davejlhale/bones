import React from "react";
import { useState, useEffect } from "react";
import { Container } from './BasicSlider.styles'

const BasicSlider = ({ action }) => {

    //set states
    const [completeTime] = useState(action.timeToComplete)
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState()
    const [buttonColour, setButtonColour] = useState("red");

    useEffect(() => {

        const reStartCount = (num) => {
            if (num >= completeTime) {
                //update reward of action
                //change lerp transition css (?)
                num = 0
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

    }, [running, completeTime]);



    const handleClick = (e) => {
        if (running) {
            setRunning(false);
            console.log("stopped");
            setButtonColour("red");

        } else {
            setRunning(true);
            console.log("started");
            setButtonColour("green");
            if (timer === 0) {
                setTimer(timer + 1);
            }
        }
    }


    return (
        
            <Container onClick={() => handleClick()}>
                <p id={buttonColour}>{action.name}</p>
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