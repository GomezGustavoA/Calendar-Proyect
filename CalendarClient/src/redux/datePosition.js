import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardEvent: false,
}

export const datePosition = createSlice({
    name: "datePosition",
    initialState,
    reducers: {
        addValueView:(state, action) => {
            state.view = action.payload;
        },

    }
});

export const { addValueView } = datePosition.actions;
export default datePosition.reducer;