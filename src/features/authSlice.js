import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import auth from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

const initialState = {
    email: '',
    loading: false,
    error: false,
    errorMsg: ''
}

export const createUser = createAsyncThunk('createUser', async ({ email, password }) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user.user.email;
})





const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.email = action.payload;
            state.error = false;
            state.errorMsg = ''
            state.loading = false
        })
        builder.addCase(createUser.pending, (state) => {
            state.error = false;
            state.errorMsg = ''
            state.loading = true
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.error = true;
            state.errorMsg = action.error.message
            state.loading = false
        })
    }
})

export const { setUser } = authSlice.actions;

export default authSlice.reducer;