import { Link } from "react-router-dom"
import {useState} from "react"
import "./StartPage.css"


function StartPage () {
    const [userName, setUserName] = useState("")
    const [txt, setTxt] = useState('');
    

    const onChangeInput  = (event) => {
        setUserName(event.target.value)
        const { value } = event.target;
        const re = /^[A-Za-z]+$/;
        if (value === "" || re.test(value)) {
        setTxt(value);
    } else {alert("Bitte nur Buchstaben eingeben.")}
    }


    return (
        <div>
            <div className="startPage">
                <h3 className="welcome">Schön, dass du da bist :)</h3>
                <h3 className="name">Wie lautet dein Name?</h3>  
                <input className="input" type="text" value={txt} onChange={onChangeInput}></input>
                <Link to="/letterselect" state={{ username: userName}}>
                    <button className="button">Los geht's!</button>
                </Link>
            </div>
        </div>
    )
}

export default StartPage