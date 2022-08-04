import { useLocation } from "react-router-dom"
import { useState } from "react"
import RandomLetter from "./RandomLetter";

function LetterSelect () {
    const location = useLocation();
    const userName = location.state?.username
    const [isToggled, setIsToggled] = useState(false)

    console.log(isToggled.toString())

    

    return (
        <div>
            <h1>Hallo {userName}!</h1>
            <p>Lass uns starten</p>
            <div>
                <button onClick={() => setIsToggled(!isToggled)}>{!isToggled ? "START" : "STOP"}</button>
            </div>
            {isToggled && <RandomLetter />}
        </div>
    )
}

export default LetterSelect