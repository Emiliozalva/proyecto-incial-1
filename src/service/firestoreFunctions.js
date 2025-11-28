import { db } from "./firebase"; 
import { 
    collection, 
    getDocs, 
    query, 
    where, 
    doc, 
    getDoc, 
    addDoc, 
    Timestamp 
} from "firebase/firestore";

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = collection(db, 'products');
        const q = categoryId 
            ? query(collectionRef, where('category', '==', categoryId))
            : collectionRef;

        getDocs(q)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                resolve(productsAdapted);
            })
            .catch((error) => reject(error));
    });
};

export const getProductById = (itemId) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then((response) => {
                if (response.exists()) {
                    const productAdapted = { id: response.id, ...response.data() };
                    resolve(productAdapted);
                } else {
                    resolve(null); 
                }
            })
            .catch((error) => reject(error));
    });
};
export const createOrder = (order) => {
    const collectionRef = collection(db, 'orders');
    const orderWithDate = {
        ...order,
        date: Timestamp.fromDate(new Date())
    };
    
    return addDoc(collectionRef, orderWithDate)
        .then((docRef) => docRef.id);
};