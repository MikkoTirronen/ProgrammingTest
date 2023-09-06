import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AnogramPageComponent from './components/pages/AnogramPageComponent';
import PuppiesComponentPage from './components/pages/PuppiesComponentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnogramPageComponent/>}/>
      <Route path="/puppies" element={<PuppiesComponentPage/>}/>
    </Routes>
  );
}

export default App;
