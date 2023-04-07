import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  homes: [],
};

const homeOwnerSlice = createSlice({
  name: "homeOwner",
  initialState,
  reducers: {
    setHomeOnwerDetails: (state, action) => {
      state.id = action.payload.id;
      state.homes= action.payload.homes
    },
  },
});

export const {setHomeOnwerDetails}= homeOwnerSlice.actions

export default homeOwnerSlice.reducer;
