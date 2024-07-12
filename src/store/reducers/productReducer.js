const initialState = {
  productForm: {
    name: "",
    description: "",
    photos: [],
    price: "",
    stock: "",
  },
  formSubmitted: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT_FORM":
      return {
        ...state,
        productForm: { ...state.productForm, ...action.payload },
      };
    case "SUBMIT_PRODUCT_FORM_SUCCESS":
      return {
        ...state,
        formSubmitted: true,
      };
    case "RESET_PRODUCT_FORM_SUBMISSION":
      return initialState;
    default:
      return state;
  }
};

export default productReducer;
