import LetterSelect from './components/LetterSelect';
import StartPage from './components/StartPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/letterselect" element={<LetterSelect />}></Route>
      </Routes>
    </div>
  );
}

export default App;
