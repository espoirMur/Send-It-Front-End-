export const FETCH_PRODUCT_BEGIN = "FETCH_PRODUCT_BEGIN";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCT_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: { error }
});

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("/products")
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
};
