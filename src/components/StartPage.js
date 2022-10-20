import { Link } from "react-router-dom"
import {useState} from "react"
import "./StartPage.css"


function StartPage () {
    const [userName, setUserName] = useState("")
    /* const onClickHandler = () => {
        setChangeSwitch(current=>!current)
    } */

/*     const changeColor = (color) => {
        if (redBackground === true) {
            setBlueBackground(false)
            setYellowBackground(false)
            setBackgroundColor('#ff2800')
            return color
        }
        if (blueBackground === true) {
            setRedBackground(false)
            setYellowBackground(false)
            setBackgroundColor('#003366')
            return color
        }
        if (yellowBackground === true) {
            setRedBackground(false)
            setBlueBackground(false)
            setBackgroundColor('#ffda40')
            return color
        } else {
            setBackgroundColor('ff2800')
        }
    } */


    return (
        <div>
            <div className="startPage">
                <h3 className="welcome">Schön, dass du da bist :)</h3>
                <h3 className="name">Wie lautet dein Name?</h3>  
                <input className="input" type="text" value={userName} onChange={(event) => {setUserName(event.target.value)}}></input>
                <Link to="/letterselect" state={{ username: userName}}>
                    <button className="button">Los geht's!</button>
                </Link>
            </div>
        </div>
    )
}

export default StartPage