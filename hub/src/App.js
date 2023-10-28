import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer'
import Rout from './Rout';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Rout/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
