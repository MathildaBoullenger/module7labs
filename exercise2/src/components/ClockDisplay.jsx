import { useState } from "react";
import Clock from "./Clock";

export default function ClockDisplay() {
    const [showClock, setShowClock] = useState(true);
    const toggleClock = () => {
        setShowClock(!showClock);
    };

    return (
        <div className="ClockDisplay componentBox">
            {showClock ? <Clock /> : console.log("clock is unmounted")} 
            {/* This means that when the condition is set to false the message will be shown */}
            {/* The 'mounted' message is defined in the clock component*/}
            {/* Two mount / unmount messages will be shown each time as the Clock component returns two elements*/}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    );
}
