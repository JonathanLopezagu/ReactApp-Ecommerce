import React from 'react'
import { useEffect, useState } from 'react';
import { gFetch } from '../../baseInfo/baseInfo';
import ItemList from '../ItemList/ItemList';
import Items from '../item/Items';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gFetch
      .then((resuelto) => { setProductos(resuelto) }
      )
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);


  return loading ? (

      <div>
        <p> Cargando.....</p>
      </div>
  ) : (
    <ItemList producto={productos} />
  );

}

export default ItemListContainer