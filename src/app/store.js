import { configureStore } from '@reduxjs/toolkit'
import matchesReducer from './slices/matchesSlice'
import recentMatchesReducer from './slices/recentMatchesSlice'

export const store = configureStore({
    reducer: {
        matches: matchesReducer,
        recentMatches: recentMatchesReducer
    }
})
