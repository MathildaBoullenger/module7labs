import { useState } from "react"; // we need to import useState because custom hooks use useState


export default function useTextInput() { // we need to export custom hooks like components using export default
    const [textInput, setTextInput] = useState(" "); // here we use "useState" to define our own custom state.

    const inputProperties = { // this is our object assigned to a variable. It contains a type property, a value property and also 
        type: "text",
        onChange: (e) => {
            setTextInput(e.target.value);
        },
        value: textInput,
    };

    return [textInput, inputProperties]
}


