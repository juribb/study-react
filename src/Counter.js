import React, {useState} from 'react';

function Counter(){
    const [number, setNumber] = useState(0);
    const onIncease = () => {
        console.log('+1');
    }

    const onDecrease = () => {
        console.log('-1');
    }

    return(
        <div>
            <h1>0</h1>
            <button onClick={onIncease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;