import { useEffect, useState } from "react";

function Counter(){
    const [Count, setCount] = useState(0);
    const [Count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("useEffect!!!");

    })

    function increment(){
        setCount(Count + 1)
    }

    function increment2(){
        setCount2(Count2 + 1)
    }
    return (
        <>
        <button onClick={increment}>Count {Count}</button>
        <button onClick={increment2}>Count2 {Count2}</button>

        </>
    )


}
export default Counter

