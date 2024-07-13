import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactForm: {
    name: "",
    issue: "",
    description: "",
    photos: [],
  },
  formSubmitted: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateContactForm: (state, action) => {
      state.contactForm = { ...state.contactForm, ...action.payload };
    },
    submitFormSuccess: (state) => {
      state.formSubmitted = true;
    },
    resetFormSubmission: (state) => {
      state.formSubmitted = false;
      state.contactForm = initialState.contactForm;
    },
  },
});

export const { updateContactForm, submitFormSuccess, resetFormSubmission } =
  contactSlice.actions;
export default contactSlice.reducer;
