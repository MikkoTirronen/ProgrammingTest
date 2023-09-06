import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AnogramPageComponent from './components/AnogramPageComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnogramPageComponent/>}/>
    </Routes>
  );
}

export default App;
