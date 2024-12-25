import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URI = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1'
const headers = {
    'x-rapidapi-key': import.meta.env.VITE_CRICBUZZ_API_KEY,
    'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
}

export const fetchRecentMatches = createAsyncThunk(
    'matches/fetchRecentMatches',
    async () => {
        const response = await axios.get(`${API_URI}/recent`, { headers });
        const currentTimestamp = Date.now(); // Current timestamp in milliseconds
        const twoDaysAgoTimestamp = currentTimestamp - 2 * 24 * 60 * 60 * 1000;

        // Extract and filter matches based on the date condition
        const filteredMatches = response.data.typeMatches.flatMap(category => {
            return category.seriesMatches.flatMap(series => {
                return series.seriesAdWrapper.matches.filter(match => {
                    const endDate = parseInt(match.matchInfo.endDate, 10);
                    return endDate >= twoDaysAgoTimestamp; // Matches ending two days ago or newer
                }).map(match => ({
                    matchType: category.matchType,
                    seriesName: match.matchInfo.seriesName,
                    matchDesc: match.matchInfo.matchDesc,
                    team1: {
                        name: match.matchInfo.team1.teamName,
                        shortName: match.matchInfo.team1.teamSName,
                        score: match.matchScore?.team1Score || null,
                    },
                    team2: {
                        name: match.matchInfo.team2.teamName,
                        shortName: match.matchInfo.team2.teamSName,
                        score: match.matchScore?.team2Score || null,
                    },
                    status: match.matchInfo.status,
                }));
            });
        });

        // If no matches meet the condition, sort by the most recent older matches
        if (filteredMatches.length === 0) {
            return response.data.typeMatches.flatMap(category => {
                return category.seriesMatches.flatMap(series => {
                    return series.seriesAdWrapper.matches.map(match => ({
                        matchType: category.matchType,
                        seriesName: match.matchInfo.seriesName,
                        matchDesc: match.matchInfo.matchDesc,
                        team1: {
                            name: match.matchInfo.team1.teamName,
                            shortName: match.matchInfo.team1.teamSName,
                            score: match.matchScore?.team1Score || null,
                        },
                        team2: {
                            name: match.matchInfo.team2.teamName,
                            shortName: match.matchInfo.team2.teamSName,
                            score: match.matchScore?.team2Score || null,
                        },
                        status: match.matchInfo.status,
                    }));
                });
            }).sort((a, b) => {
                const endDateA = parseInt(a.matchInfo.endDate, 10);
                const endDateB = parseInt(b.matchInfo.endDate, 10);
                return endDateB - endDateA; // Sort by most recent
            });
        }

        return filteredMatches;
    }
);