import React from 'react';
import { useState } from 'react';

function CounterPage () {    
    let [CountNum,setCount] = useState(0);

    let increaseValue = () => {

        setCount(CountNum += 1);//increase number by 1
    };

    let decreaseValue = () => {   

        if(CountNum === 0) { 

        alert("Let's stay positive"); 
    } else {           
        setCount(CountNum -= 1);
        }
    };//Decrease by 1



    return (
        <div>
        <h1>{CountNum}</h1>
        <button onClick={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
        </div>
    )

}

export default CounterPage;