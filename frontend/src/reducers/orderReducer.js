export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_CREATE_SUCCESS":
      return {
        loading: false,
        order: action.payload,
        success: true,
      };
    case "ORDER_CREATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const orderDetailsReducer = (
  state = { loading: true, order: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "ORDER_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ORDER_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case "ORDER_DETAILS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
