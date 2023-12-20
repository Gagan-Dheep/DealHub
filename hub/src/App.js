import './App.css';
import react,{useState} from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer'
import Rout from './Rout';
import Product_Detail from './component/Product_Detail';
import {BrowserRouter} from 'react-router-dom'
function App() {
  const [product,setProduct]=useState(Product_Detail);
  const[detail,setDetail]=useState([]);
  const [close,setClose]=useState(false);

  const view=(product)=>{
    setDetail([{...product}])
    setClose(true)
  }
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Rout product={product}  detail={detail} view={view} close={close} setClose={setClose}/>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
