import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: "",
    arrivalDate: "",
    depratureDate: "",
    guests: {
        adults: 0,
        childs: 0,
        babies: 0
    }
}

const filterSlice = createSlice({
    initialState,
    name: 'filter',
    reducers: {
        searchedData: (state, action) => {
            state.address = action.payload.address;
            state.arrivalDate = action.payload.arrivalDate;
            state.depratureDate = action.payload.depratureDate;
            state.guests = action.payload.guests
        },
        setInputs:(state, action)=>{
            state.address = action.payload.address;
            state.arrivalDate = action.payload.arrivalDate;
            state.depratureDate = action.payload.depratureDate;
        },
        toogleGuestQuantity: (state, action) => {
            switch (action.payload.type) {
                case '+':
                    state.guests[action.payload.name]++;
                    break;
                case '-':
                    console.log();
                    if (state.guests[action.payload.name] > 0) state.guests[action.payload.name]--
                default:
                    state
                    break;
            }

        },
        removeFilter: (state) => {
            state.address = '';
            state.arrivalDate = '';
            state.depratureDate = '';
            state.guests.adults = 0;
            state.guests.childs = 0;
            state.guests.babies = 0;
        }

    }
})

export const { searchedData, toogleGuestQuantity, removeFilter, setInputs } = filterSlice.actions

export default filterSlice.reducer