const filter_reducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
  
      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };
  
      case "GET_SORT_VALUE":
        return {
          ...state,
          sorting_value: action.payload,
        };

        case "FILTER_PRODUCTS":
          let { all_products, filters } = state;
          let tempFilterproduct = [...all_products];
          const { text, category,company,color} = filters;
        
          if (text) {
            tempFilterproduct = tempFilterproduct.filter((curlElem) => {
              return curlElem.name.toLowerCase().includes(text);
            });
          }
        
          if (category && category.toUpperCase() !=="ALL") {
            tempFilterproduct = tempFilterproduct.filter((curlElem) => {
              return curlElem.category === category;
            });
          }
          if (company && company.toUpperCase() !== "ALL") {
            tempFilterproduct = tempFilterproduct.filter((curlElem) => {
              return curlElem.company === company;
            });
          }
          if (color && color.toUpperCase() !=="ALL") {
            tempFilterproduct = tempFilterproduct.filter((curlElem) => {
              return curlElem.colors.includes(color)
            });
          }
        
          return {
            ...state,
            filter_products: tempFilterproduct,
          };

      case "UPDATE_FILTER_VALUE":
        const {name,value}=action.payload;
        return {
          ...state,
          filters:{
            ...state.filters,
            [name]:value,
          }
        }

      case "SORTING_PRODUCTS":
        let newSortData;
        const { filter_products, sorting_value } = state;
        let tempSortdata = [...filter_products];
  
        const SortingProducts = (a, b) => {
          if (sorting_value === "a-z") {
            return a.name.localeCompare(b.name);
          }
          if (sorting_value === "Lowest") {
            return a.price - b.price;
          }
          if (sorting_value === "Highest") {
            return b.price - a.price;
          }
        };
  
        newSortData = tempSortdata.sort(SortingProducts);
  
        return {
          ...state,
          filter_products: newSortData,
        };
  
      default:
        return state;
    }
  };
  
  export default filter_reducer;
  