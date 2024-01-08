const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

            case "SET_API_DATA":
                const Featureddata = action.payload.filter((curElem)=>{
                    return curElem.featured===true; })

                return{
                        ...state,
                        isLoading:false,
                        products:action.payload,
                        FeaturedProducts:Featureddata
                }
        case "API_ERROR":
            return {
                ...state,
                isLoading: true,
                isError: true,
            };
            case "SET_SINGLE_LOADING":
                return {
                    ...state,
                    isSingleLoading: true,
                };
                case "SET_SINGLE_PRODUCT":
                    return{
                            ...state,
                            isSingleLoading:false,
                            SingleProduct:action.payload,

                    }
                case "SINGLE_API_ERROR":
                    return{
                        ...state,
                        isSingleLoading: true,
                        isSingleError: true,
                    }


        default:
            return state;
    }
};

export default ProductReducer;

