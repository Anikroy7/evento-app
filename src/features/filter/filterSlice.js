import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: {},
}

const filterSlice = createSlice({
    initialState,
    name: 'filter',
    reducers: {
        searchedData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { searchedData } = filterSlice.actions

export default filterSlice.reducer