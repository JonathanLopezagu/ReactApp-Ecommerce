import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailsContainer from './components/Containers/ItemDetailsContainer/ItemDetailsContainer';
import FormBuy from './components/FormBuy/FormBuy';
import Cart from './components/Containers/cart/Cart';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer';
import CarritoContext from './Context/CarritoContext';


function App() {
  return (
    <CarritoContext> 
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes> 
        <Route index path='/' element={<ItemListContainer /> }/> 
        <Route path='/:categoria' element={<ItemListContainer /> }/> 
        <Route path='/details/:id' element={<ItemDetailsContainer/> }/>
        <Route path='/cart' element={<Cart/> }/>
        <Route path='/finalizarCompra' element={<FormBuy/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </CarritoContext>
  );
}

export default App;
