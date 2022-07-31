import {addDoc,collection} from 'firebase/firestore'
import {db} from './config'

export const generateOrder = (order, setOrderId, vaciarCarrito) => {
    const refOrder = collection(db, 'ordersConfirm')
    addDoc(refOrder, order)
        .then((doc) => {
            setOrderId(doc.id)
            console.log(doc.id)
        })
    vaciarCarrito()
}