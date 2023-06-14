import "./App.css";
import { MoodContextProvider } from "./components/MoodContext";
import Emoji from "./components/Emoji";

function App() {

    return (
        <>
            <MoodContextProvider>
                <Emoji></Emoji>
            </MoodContextProvider>
        </>
    );
}

export default App;
