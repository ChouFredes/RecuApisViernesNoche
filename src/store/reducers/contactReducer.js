const initialState = {
  contactForm: {
    name: "",
    issue: "",
    photos: [],
    description: "",
  },
  formSubmitted: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CONTACT_FORM":
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          ...action.payload,
          photos: action.payload.photos || state.contactForm.photos,
        },
      };
    case "SUBMIT_FORM_SUCCESS":
      return {
        ...state,
        formSubmitted: true,
      };
    case "RESET_FORM_SUBMISSION":
      return {
        ...state,
        formSubmitted: false,
        contactForm: {
          name: "",
          issue: "",
          photos: [],
          description: "",
        },
      };
    default:
      return state;
  }
};

export default contactReducer;
