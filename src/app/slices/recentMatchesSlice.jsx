import { createSlice } from '@reduxjs/toolkit'
import { fetchRecentMatches } from '../thunks/fetchRecentMatches'

const initialState = {
    recentMatches: [],
    loading: false,
    error: null
}

const matchesSlice = createSlice({
    name: 'recentMatch',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // recent match data
        builder
            .addCase(fetchRecentMatches.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchRecentMatches.fulfilled, (state, action) => {
                state.loading = false
                state.recentMatches = action.payload
            })
            .addCase(fetchRecentMatches.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

    }
})

export default matchesSlice.reducer;