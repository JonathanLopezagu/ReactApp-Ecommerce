import {addDoc,collection} from 'firebase/firestore'
import {db} from './config'
//funcion que genera orden de compra
export const generateOrder = (order, setOrderId, vaciarCarrito) => {
    const refOrder = collection(db, 'ordersConfirm')
    addDoc(refOrder, order)
        .then((doc) => {
            setOrderId(doc.id)
        })
    vaciarCarrito()
}