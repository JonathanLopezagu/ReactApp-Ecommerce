import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Containers/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer /> 
      
    </div>
  );
}

export default App;
