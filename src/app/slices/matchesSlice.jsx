import { createSlice } from '@reduxjs/toolkit'
import { fetchLiveMatches } from '../thunks/fetchMatches'

const initialState = {
    liveMatches: [],
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
    }
})

export default matchesSlice.reducer;