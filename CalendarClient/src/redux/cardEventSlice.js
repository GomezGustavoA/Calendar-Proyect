import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardEvent: false,
    cardEventInfo:{}
}

export const cardEventSlice = createSlice({
    name: "cardEvent",
    initialState,
    reducers: {
        viewCardEvent:(state, action) => {
            state.cardEvent = action.payload;
        },
        cardEventView:(state, action) => {
            state.cardEventInfo = action.payload
        }
    }
});

export const { viewCardEvent, cardEventView} = cardEventSlice.actions;
export default cardEventSlice.reducer;