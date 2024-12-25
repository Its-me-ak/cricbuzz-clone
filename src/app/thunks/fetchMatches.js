import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URI = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1'
const headers = {
    'x-rapidapi-key': import.meta.env.VITE_CRICBUZZ_API_KEY,
    'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
}

export const fetchLiveMatches = createAsyncThunk(
    'matches/fetchLiveMatches',
    async () => {
        const response = await axios.get(`${API_URI}/live`, { headers })
        // console.log(response.data);
        return response.data
    }
)