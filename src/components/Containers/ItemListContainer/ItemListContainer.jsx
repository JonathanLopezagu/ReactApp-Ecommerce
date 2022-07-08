import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../../baseInfo/baseInfo';
import ItemList from '../../ItemList/ItemList';
//import Items from '../../item/Items';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoria}= useParams();

  useEffect(() => {
    if(categoria){
    gFetch
      .then((resp) => { setProductos(resp.filter((element) => element.categoria === categoria))}
      )
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      });
    }
    else {
      gFetch
        .then((resp) => {
          setProductos(resp);
        })
        .catch((rej) => {
          console.log(rej);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoria]);


  return loading ? (

      <div>
        <p> Cargando.....</p>
      </div>
  ) : (
    <ItemList producto={productos} />
  );

}

export default ItemListContainer