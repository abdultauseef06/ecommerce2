import { createContext, useContext, useEffect, useReducer }  from "react";
import { useProductContext, } from "../context/Productcontext";
import reducer from '../reducer/Filter_reducer'

const FilterContext =createContext();
const initialstate ={
  filter_products:[],
  all_products:[],
  grid_view:true,
  sorting_value:"Lowest",
  filters:{
    text:"",
    category:"all",
    company:"all",
    color:"all"
  }
}

 export const FilterContextProvider = ({children})=>{
  const {products} = useProductContext();
  

  const [state,dispatch]= useReducer(reducer,initialstate);

  const sorting =(event)=>{
    let userValue=event.target.value;
    return dispatch ({type:"GET_SORT_VALUE",payload:userValue});
  }

  const setGridView =()=>{
    return dispatch({type:"SET_GRID_VIEW"})
  }
  const setListView=()=>{
    return dispatch({type:"SET_LIST_VIEW"})
  }

  const updateFilterValue= (event)=>{
    let name= event.target.name;
    let value= event.target.value;
    return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
  }

  
  useEffect(()=>{
    dispatch ({type:"FILTER_PRODUCTS"})
    dispatch({type:"SORTING_PRODUCTS"})
  },[products,state.sorting_value,state.filters])

  useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS",payload: products})
  },[products])


  return <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue}}>
            {children}
        </FilterContext.Provider>
}


export const useFilterContext =()=>{
  return useContext(FilterContext);
}
