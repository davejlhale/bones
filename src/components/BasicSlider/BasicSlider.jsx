import React from "react";
import styled from 'styled-components'
import { useState, useEffect } from "react";

const Container = styled.div`
    width:90%;
    height:70px;
    line-height: 70px; //same as height
    display: flex;
    align-items:flex-end;

    P {
        width:150px; 
        text-align: center;
        background-color: red;
        user-select: none;
    }

    .barWrapper { 
        background-image: linear-gradient(to right, red , white);
        flex-grow: 1; 
        height:100%;// Fill remaining space
        min-width: 0; // Don't use more space than available
        margin:auto;
    }

    .barContainer {
       
       border:3px solid red;
        height:100%;
        background-color:white;
    }

    .bar {
        background-color: green;
        margin:0px; 
        height:100%;
        transition: linear  1s    }

`;

const BasicSlider = ({ ActionConfig }) => {


    //set states
    const [completeTime] = useState(ActionConfig.timeToComplete)
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState()


    useEffect(() => {

        const reStartCount = (num) => { 
            if (num>=completeTime) {
                //update reward of action
                num =0
            } else {
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
                <p>{ActionConfig.name}</p>
                <div className="barWrapper">
                    <div className="barContainer">
                        <div className="bar" style={{ width: (timer / completeTime) * 100 + '%' }}>{timer}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )

}

export default BasicSlider