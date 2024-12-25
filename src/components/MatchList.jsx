import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecentMatches, fetchLiveMatches } from '../app/thunks/fetchMatches';
import MatchCard from './MatchCard';

const MatchList = () => {
    const dispatch = useDispatch();
    const { liveMatches, recentMatches, loading, error } = useSelector((state) => state.matches);
    // console.log(liveMatches);
    // console.log(recentMatches);

    useEffect(() => {
        dispatch(fetchLiveMatches());
        dispatch(fetchRecentMatches());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Combine live matches and recent matches based on the logic
    const matchesToDisplay = liveMatches.length > 0
        ? [...liveMatches, ...recentMatches]
        : recentMatches;
    console.log(matchesToDisplay);

    // fantasy and fantasy handebook
    const fantasy = matchesToDisplay.contentFilters?.[0]?.filterId
    const fantasyHandbook = matchesToDisplay.contentFilters?.[0]?.filterName

    return (
        <div className="match-list">
            {matchesToDisplay.map((match, index) => (
                <MatchCard key={index} match={match} />
            ))}
        </div>
    );
};

export default MatchList;
