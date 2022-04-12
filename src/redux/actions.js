// 1. crear la propiedad en el objeto actions
// 2. Crear el case con la propiedad
// 3. Hacer la funcion que retorne la accion
// 4. Despachar la funcion en un componente o thunk 

import axios from "axios"

export const actions = {
    setProducts: "ADD_PRODUCTS",
    setProduct: 'SET_PRODUCT',
    setIsLoading: 'SET_IS_LAODING',
    setIsModalLogin: 'SET_IS_MODAL_LOGIN'

}

export const setProducts = products => ({
    type: actions.setProducts,
    payload: products
})

export const setProduct = product =>({
    type: actions.setProduct,
    payload: product
})

export const setIsLoading = isLoading =>({
     type: actions.setIsLoading,
     payload: isLoading
})

export const setIsModalLogin = isModalLogin =>({
    type: actions.setIsModalLogin,
    payload: isModalLogin
})


export const getProductsThunk = () =>{
   return dispatch => {
    dispatch( setIsLoading(true) )   
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then( res => dispatch(setProducts(res.data.data.products)))
    .finally ( () => dispatch(setIsLoading(false)) )
   }
}

export const getProductsInfoThunk = id =>{
    return dispatch => {
     dispatch( setIsLoading(true) )   
     axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
     .then( res => dispatch(setProduct(res.data.data.product)))
     .finally ( () => dispatch(setIsLoading(false)) )
    }
 }