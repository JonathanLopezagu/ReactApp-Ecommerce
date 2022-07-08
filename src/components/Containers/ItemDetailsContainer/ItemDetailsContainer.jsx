import React, { useState , useEffect , setTimeout} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from '../../ItemDetails/ItemDetails'
import { gFetch } from '../../../baseInfo/baseInfo'



const ItemDetailsContainer = () => {
  const [ productos, setProductos] = useState([]);
  const [ loading, setLoading ]= useState(true);
  const { id } = useParams() ;


  useEffect(()=> { 
    
    gFetch
      .then((resp) =>  setProductos(
        resp.find((prod) => prod.id === Number(id)) )
      )
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      });

  } , [id]);
  

  console.log(id);
 
  return loading ? (

    <div>
      <p> Cargando.....</p>
    </div>
) : (
  <ItemDetails item={productos} />
);
};

export default ItemDetailsContainer