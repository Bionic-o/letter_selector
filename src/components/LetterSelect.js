import { useLocation } from "react-router-dom"
import RandomLetter from "./RandomLetter";

function LetterSelect () {
    const location = useLocation();
    const userName = location.state?.username

    const shouldAddEventHandler = true;

    const handleClick = event => {
    console.log('Button clicked');
    };

    return (
        <div>
            <h1>Hallo {userName}!</h1>
            <p>Lass uns starten</p>
            <div>
                <button onClick={shouldAddEventHandler ? handleClick : undefined}>START</button>
                <button>STOP</button>
            </div>
            {handleClick}
        </div>
    )
}

export default LetterSelect