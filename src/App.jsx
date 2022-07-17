import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//import ItemDetails from './components/ItemDetails/ItemDetails';
import Cart from './components/Containers/cart/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailsContainer from './components/Containers/ItemDetailsContainer/ItemDetailsContainer';
import CarritoContext from './Context/CarritoContext';


function App() {
  return (
    <CarritoContext>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes> 
        <Route index path='/' element={<ItemListContainer /> }> </Route>
        <Route path='/:categoria' element={<ItemListContainer /> }> </Route>
        <Route path='/details/:id' element={<ItemDetailsContainer/> }> </Route>
        <Route path='/cart' element={<Cart/> }> </Route>
        <Route path='*' element={<Navigate to='/'/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </CarritoContext>
  );
}

export default App;
