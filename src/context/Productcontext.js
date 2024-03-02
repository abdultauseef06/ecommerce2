import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
const AppContext = createContext();
//const API= "https://fakestoreapi.com/products";
//const API = "https://fake-store-api.mock.beeceptor.com/api/products";
//const API = "https://api.pujakaitem.com/api/products";
 const API = "https://ecommerce-server-blue.vercel.app/api/products";

const initialState={
    isLoading:false,
    isError:false,
    isSingleError:false,
    products:[],
    FeaturedProducts:[],
    isSingleLoading:false,
    SingleProduct:{}

};
const AppProvider = ({children})=> {
    const [state, dispatch]= useReducer(reducer,initialState);

    const getProducts = async(url)=>{
    dispatch({type:"SET_LOADING"})
    try{
        const res =  await axios.get(url);
        const products = await res.data;
        
            dispatch({type:"SET_API_DATA", payload: products});
        }
        catch(error){
            dispatch({type:"SINGLE_API_ERROR"})
        }}

    const getSingleProduct =async(url)=>{

        dispatch({type:"SET_SINGLE_LOADING"})
        try {const res =  await axios.get(url);
            const SingleProduct = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT", payload:SingleProduct});
        } catch (error) {
            dispatch({type:"SINGLE_API_ERROR"})
        }
    };

    useEffect(()=>{
        getProducts(API);
    },[])

    return <AppContext.Provider value={{...state, getSingleProduct}}>
        {children}
    </AppContext.Provider>

}
const useProductContext = () =>{
    return useContext(AppContext);

}

export {AppProvider, AppContext, useProductContext} ;