import { Link } from "react-router-dom"
import {useState} from "react"
import "./StartPage.css"


function StartPage () {
    const [userName, setUserName] = useState("")
    console.log(userName)
    return (
        <div>
            <div>
                <button className="style1">Style 1</button>
                <button className="style2">Style 2</button>
                <button className="style3">Style 3</button>
            </div>
            <div>
                <h3>Schön, dass du da bist :)</h3>
                <h3>Wie lautet dein Name?</h3>  
                <input type="text" value={userName} onChange={(event) => {setUserName(event.target.value)}}></input>
                <Link to="/letterselect" state={{ username: userName}}>
                    <button>Los geht's!</button>
                </Link>
            </div>
        </div>
    )
}

export default StartPage