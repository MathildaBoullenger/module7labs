import { useState } from "react"
import { useEffect } from "react"

export default function Count() {

const [counterOne, setCounterOne] = useState(0);
const [counterTwo, setCounterTwo] = useState(0);
const [initialRender, setInitialRender] = useState(true);
// the initialRender state is used to track the first rendering and defaults to true

useEffect(() => {
    if (!initialRender) { // when the initial rendering is false (after the first call on useEffect), 
    alert(`Counter 1 has been incremented ${counterOne} time(s)`)//we can use alert('counterOne got updated') upon incrementation of counterOne; 
    } else {
      setInitialRender(false); // the initial rendering is set to false to enable the alert after the first rendering
    }
  }, [counterOne]);

const handleIncCounterOne = () => {
    setCounterOne(counterOne + 1);
    //console.log('1:', counterOne)
};

const handleIncCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
    //console.log('2:', counterTwo)
};

return (

<div>
<button onClick={handleIncCounterOne}>Increment Counter 1</button>
<button onClick={handleIncCounterTwo}>Increment Counter 2</button>
</div>

)
}


