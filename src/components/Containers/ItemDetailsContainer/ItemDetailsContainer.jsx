import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from '../../ItemDetails/ItemDetails'
//import { gFetch } from '../../../baseInfo/baseInfo'
import Loading from '../../Loader/Loading';
import { doc, getDoc,  getFirestore} from 'firebase/firestore'


const ItemDetailsContainer = () => {
  //const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //detalle

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const queryProduct = doc(db, 'productos',id);
      getDoc(queryProduct)
        .then(resp => setProducto({ id: resp.id, ...resp.data() }))
        .catch( err=> console.log(err))
        .finally(()=> setLoading(false))
    }, 2000)

  }, [id]);

  return loading ? (

    <Loading />
  ) : (
    <ItemDetails item={producto} />
  );
};

export default ItemDetailsContainer