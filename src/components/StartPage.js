import { Link } from "react-router-dom"
import {useState} from "react"
import "./StartPage.css"


function StartPage () {
    const [userName, setUserName] = useState("")
    const [redBackground, setRedBackground] = useState(false)
    const [blueBackground, setBlueBackground] = useState(false)
    const [yellowBackground, setYellowBackground] = useState(false)
    //const [changeSwitch, setChangeSwitch] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState("")
    console.log(userName)

    const onClickHandlerRed = (red) => {
        setRedBackground(current => !current)
        if (redBackground === false) {
            setBlueBackground(false)
            setYellowBackground(false)
            setBackgroundColor('#ff2800')
            return red
        } 
        
    }
    const onClickHandlerBlue = (blue) => {
        setBlueBackground(current => !current)
        if (blueBackground === false) {
            setRedBackground(false)
            setYellowBackground(false)
            setBackgroundColor('#003366')
            return blue
        }
    }
    const onClickHandlerYellow = (yellow) => {
        setYellowBackground(current => !current)
        if (yellowBackground === false) {
            setRedBackground(false)
            setBlueBackground(false)
            setBackgroundColor('#ffda40')
            return yellow
        } 
    }
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

    console.log('Style1', redBackground)
    console.log('Style2', blueBackground)
    console.log('Style3', yellowBackground)
    console.log(backgroundColor)


    return (
        <div className="app" style={{backgroundColor: `${backgroundColor}`}}>
            <div className="styleButtons">
                <button className="style1" onClick={onClickHandlerRed}>Style 1</button>
                <button className="style2" onClick={onClickHandlerBlue}>Style 2</button>
                <button className="style3" onClick={onClickHandlerYellow}>Style 3</button>
            </div>
            <div>
                <h3 className="welcome">Schön, dass du da bist :)</h3>
                <h3 className="name">Wie lautet dein Name?</h3>  
                <input className="input" type="text" value={userName} onChange={(event) => {setUserName(event.target.value)}}></input>
                <Link to="/letterselect" state={{ username: userName}}>
                    <button className="button">Los geht's!</button>
                </Link>
            </div>
            <p className="footer">App created by Nico Weiskopf - 2023</p>
        </div>
    )
}

export default StartPage