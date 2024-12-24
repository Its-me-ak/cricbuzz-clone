import { configureStore } from '@reduxjs/toolkit'
import matchesReducer from './slices/matchesSlice'

export const store = configureStore({
    reducer: {
        matches: matchesReducer
    }
})
