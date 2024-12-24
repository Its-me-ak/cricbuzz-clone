import { createSlice } from '@reduxjs/toolkit'
import { fetchRecentMatches, fetchLiveMatches } from '../thunks/fetchMatches'

const initialState = {
    liveMatches: [],
    recentMatches: [],
    loading: false,
    error: null
}

const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // live match data
        builder
            .addCase(fetchLiveMatches.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchLiveMatches.fulfilled, (state, action) => {
                state.loading = false
                state.liveMatches = action.payload
            })
            .addCase(fetchLiveMatches.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

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