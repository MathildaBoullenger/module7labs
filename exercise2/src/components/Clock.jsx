import { useState } from "react";
import { useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(tick, 1000);
        console.log("clock is mounted");
    }, []);

    const tick = () => {
        setTime(new Date());
        console.log("tick");
    };

    return (
        <>
        <div>
            <h3>This is my new clock</h3>
            {time.toLocaleTimeString()}
        </div>
        </>
    );
}
