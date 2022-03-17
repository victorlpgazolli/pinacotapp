import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    authInformation: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, {
            payload: userInfo,
        }) => {
            state.authInformation = userInfo
        }
    },
})


const {
    saveUser
} = userSlice.actions;

export {
    saveUser
}

export default userSlice.reducer