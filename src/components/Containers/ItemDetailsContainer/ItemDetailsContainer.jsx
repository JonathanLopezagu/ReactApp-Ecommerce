import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from '../../ItemDetails/ItemDetails'
import Loading from '../../Loader/Loading';
import { doc, getDoc,  getFirestore} from 'firebase/firestore'


const ItemDetailsContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //detalle de un solo producto, filtrado por ID
  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const queryProduct = doc(db, 'productos',id);
      getDoc(queryProduct)
        .then(resp => setProduct({ id: resp.id, ...resp.data() }))
        .catch( err=> console.log(err))
        .finally(()=> setLoading(false))
    }, 2000)

  }, [id]);

  return loading ? (

    <Loading />
  ) : (
    <ItemDetails item={product} />
  );
};

export default ItemDetailsContainer