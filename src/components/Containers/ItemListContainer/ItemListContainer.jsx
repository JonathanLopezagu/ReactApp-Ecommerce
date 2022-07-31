import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection,getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../../ItemList/ItemList';
import Loading from '../../Loader/Loading';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  // Se trae toda la colleccion y filtra por categoria

   useEffect(()=>{ 
    const db= getFirestore();
    const queryCollection= collection(db,'productos');
    // condicion para filtrado para filtrado
    if(categoria){ 
      const queryCollectionFiltrado =query(queryCollection,where('categoria','==',categoria))
      getDocs(queryCollectionFiltrado)
        .then(resp=> setProducts(resp.docs.map(element=> ({ id : element.id, ...element.data()}) )))
        .catch( err=> console.log(err))
        .finally(()=> setLoading(false))
    }
    else { 
      //Si no hay categoria trae todos los docs.
    getDocs(queryCollection)
      .then(resp=> setProducts(resp.docs.map(element=> ({ id : element.id, ...element.data()}) )))
      .catch( err=> console.log(err))
      .finally(()=> setLoading(false))
    }
   },[categoria] )

  return loading ? (

    <Loading />
  ) : (
    <ItemList product={products} />
  );

}

export default ItemListContainer