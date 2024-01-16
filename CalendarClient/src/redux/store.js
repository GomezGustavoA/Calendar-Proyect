import { configureStore } from "@reduxjs/toolkit";
import datePositionReducer from "./datePosition";
import eventsReducer from "./events";
import cardEventReducer from "./cardEventSlice";


export const store = configureStore({
    reducer:{
        datePosition: datePositionReducer,
        events: eventsReducer,
        cardEventSlice: cardEventReducer,
    }
});