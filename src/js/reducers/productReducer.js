import {
  FETCH_PRODUCT_BEGIN,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from "../actions/ProductActions";

const initialState = { items: [], loading: false, error: null };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_BEGIN:
      // begin the loading , set loading to true and error to false
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCT_SUCCESS:
      // fetch product success return loading false , error null and the product
      return { ...state, loading: false, items: action.payload.products };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};

export default productReducer;
