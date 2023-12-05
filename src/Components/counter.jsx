import { useState } from "react";
import styles from '../styles/counter.module.css'

const Counter = ()=>{
    // let count = 0;
    let [count, setCount] = useState(0);


    function handleAddClick(){
        // console.log("clicked add")
        
        // count = count + 1;
        // console.log(count)
        if(count<10){
            setCount(count + 1)
        }

    }
    function handleSubtractClick(){
        if(count >0){
            setCount(count - 1);
        }
    }
    return(
    <>
<h1 className="{styles.heading}">Counter</h1>

<h3>Count : {count}</h3>
{count == 0 ? <p>You have reached the last value</p>: <></>}
{count == 10 ? <p>You have reached the Final value</p>: <></>}
{count<10 && <button onClick={handleAddClick}>Add Count</button>}

{count>0 && <button onClick={handleSubtractClick}>Subtract Count</button>}

    </>
    );
};
export default Counter;