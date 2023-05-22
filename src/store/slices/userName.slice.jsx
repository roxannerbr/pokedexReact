/* CREAMOS EL USERNAME PARA INGRESAR A LA APP, QUE SE PIDE INGRESAR EL NOMBRE */

import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: "",
    reducers: {
        getUsername: (state, action) => {
            const inputName = action.payload;
            return inputName
    }
}
})
export const {getUsername } = userNameSlice.actions;
export default userNameSlice.reducer;