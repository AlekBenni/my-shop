
const initState:InitStateType = {
    products: [],
    isLoading: false
}

type InitStateType = {
    products: Array<ProductType>
    isLoading: boolean
}

export type ProductType = {
    _id: string
    name: string
    category: string
    desc: string
    img: string
    price: number
    ratting: number
}

type ActionType = any

// type SetProductType = {
//     products:ProductType
//     type: 'SET_PRODUCTS'
// }

// type ChangeLoadingType = {
//     loading:boolean
//     type:'CHANGE_LOADING'
// }

export const ProductReducer = (state:InitStateType = initState, action:ActionType) => {
    switch(action.type){
        case 'SET_PRODUCTS':{
            return {...state, products : action.products}
        }
        case 'CHANGE_LOADING':{
            return {...state, isLoading : action.loading}
        }
        case 'ADD_PRODUCT':{
            let stateCopy = {...state}
            stateCopy.products = [...state.products]
            stateCopy.products.unshift(action.product)
            return stateCopy
        }
        case 'DELETE_PRODUCT':{
            let stateCopy = {...state}
            let filteredProducts = stateCopy.products.filter(item => item._id !== action.product._id)
            stateCopy.products = filteredProducts
            return stateCopy
        }
        case 'UPDATE_PRODUCT': {
            let stateCopy = {...state}
            let updatingProduct = stateCopy.products.find(item => item._id === action.product._id)
            if(updatingProduct){
            updatingProduct.name = action.product.name  
            }
            return stateCopy
        }
    default: return state    
    }
}

export const setProductsAC = (products:ProductType) => ({type:'SET_PRODUCTS', products})
// type SetProductType = ReturnType<typeof setProductsAC>

export const changeLoadingAC = (loading:boolean) => ({type:'CHANGE_LOADING', loading})
// type ChangeLoadingType = ReturnType<typeof changeLoadingAC>

export const addProductAC = (product:ProductType) => ({type:'ADD_PRODUCT', product})

export const deleteProductAC = (product:ProductType) => ({type: 'DELETE_PRODUCT', product})

export const updateProductAC = (product:ProductType) => ({type:'UPDATE_PRODUCT', product})