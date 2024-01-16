import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const events = createSlice({
    name: 'events',
    initialState,
    reducers:{
        addEvents: (state, action) => {
            const newEvents = action.payload.map(event => {
                const { _id, title, start, end } = event;
                return { id: _id,  title, start, end };
            });
        
            // Filtrar eventos para asegurarse de que no haya duplicados en base al _id
            const uniqueEvents = newEvents.filter(newEvent => !state.some(existingEvent => existingEvent.id === newEvent.id));
        
            return [...state, ...uniqueEvents];
        },
        resetevents: (state) =>{
            state = [];
        }
    }
});

export const { addEvents, resetevents } = events.actions;
export default events.reducer;