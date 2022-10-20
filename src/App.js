import LetterSelect from './components/LetterSelect';
import StartPage from './components/StartPage';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'

function App() {
  const [redBackground, setRedBackground] = useState(false)
  const [blueBackground, setBlueBackground] = useState(false)
  const [yellowBackground, setYellowBackground] = useState(false)
  const [buttonColor, setButtonColor] = useState(false)
  //const [changeSwitch, setChangeSwitch] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState("")
  const [fontColor, setFontColor] = useState("black")
  //console.log(userName)


  useEffect(() => {
    if (redBackground === false && blueBackground === false && yellowBackground === false) {
      setBackgroundColor('#800000')
      return 
    }
  }, [])
  useEffect(() => {
    if (yellowBackground === true) {
      setButtonColor('#ffd700')
    } 
    if (blueBackground === true) {
      setButtonColor('#003366')
    }
    if (redBackground === true) {
      setRedBackground('#990000')
    }
  }, [])

  const onClickHandlerRed = (red) => {
      setRedBackground(current => !current)
      if (redBackground === false) {
          setBlueBackground(false)
          setYellowBackground(false)
          setBackgroundColor('#800000')
          setFontColor('white')
          return red
      } 
      
  }
  const onClickHandlerBlue = (blue) => {
      setBlueBackground(current => !current)
      if (blueBackground === false) {
          setRedBackground(false)
          setYellowBackground(false)
          setBackgroundColor('#003366')
          setFontColor('white')
          return blue
      }
  }
  const onClickHandlerYellow = (yellow) => {
      setYellowBackground(current => !current)
      if (yellowBackground === false) {
          setRedBackground(false)
          setBlueBackground(false)
          setBackgroundColor('#eec900')
          setFontColor('black')
          //setButtonColor('#ffda40')
          return yellow
      } 
  }

    console.log('Style1', redBackground)
    console.log('Style2', blueBackground)
    console.log('Style3', yellowBackground)
    console.log(buttonColor)

  return (
    <div className="app" style={{backgroundColor: `${backgroundColor}`, color: `${fontColor}`}}>
      <div className="styleButtons">
          <button className="style1" onClick={onClickHandlerRed}>Style 1</button>
          <button className="style2" onClick={onClickHandlerBlue}>Style 2</button>
          <button className="style3" style={{backgroundColor: `${buttonColor}`}} onClick={onClickHandlerYellow}>Style 3</button>
      </div>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/letterselect" element={<LetterSelect />}></Route>
      </Routes>
      <p className="footer">App created by Nico Weiskopf - 2023</p>
    </div>
  );
}

export default App;
