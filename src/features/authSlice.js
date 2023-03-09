import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import auth from "../../firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useActionTypes from "../hooks/useBuilder";

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


export const loginUser = createAsyncThunk('loginUser', async ({ email, password }) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user.user.email;
})



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload;
            state.loading = false
        },
        logout: (state) => {
            state.email = '';
            state.loading = false
        }
    },
    extraReducers: (builder) => {

        const { fulfilled, pending, rejected } = useActionTypes()

        builder
            .addCase(createUser.pending, (state) => {
                pending(state)
            })
            .addCase(createUser.fulfilled, (state, action) => {
                fulfilled(state, action)
            })
            .addCase(createUser.rejected, (state, action) => {
                rejected(state, action)
            })
            .addCase(loginUser.pending, (state) => {
                pending(state)
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                fulfilled(state, action)
            })
            .addCase(loginUser.rejected, (state, action) => {
                rejected(state, action)
            })
    }
})

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;