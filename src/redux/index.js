import { actions } from "./actions";

const INITIAL_STATE = {

    products: [],
    product: [],
    categories: [],
    isLoading: false,
    isModalLogin: false,

}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

        case actions.setProducts:
            return{
                ...state,
                products: action.payload
            }

        case actions.setProduct:
            return{
                ...state,
                product: action.payload
            }    

        case actions.setIsLoading:
            return{
                ...state,
                isLoading: action.payload
            }
            
        case actions.setIsModalLogin:
            return{
                ...state,
                isModalLogin: action.payload
            }
        
        case actions.setCategories:
            return{
                ...state,
                categories: action.payload
            }    
            

        default:
            return state;
    }
}

export default reducer;