import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecentMatches, fetchLiveMatches } from '../app/thunks/fetchMatches';
import MatchCard from './MatchCard';

const MatchList = () => {
    const dispatch = useDispatch();
    const { liveMatches, recentMatches, loading, error } = useSelector((state) => state.matches);
    console.log(liveMatches);
    console.log(recentMatches);
    
    useEffect(() => {
        dispatch(fetchLiveMatches());
        dispatch(fetchRecentMatches());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="match-list">
            <MatchCard />
        </div>
    );
};

export default MatchList;
