import React from 'react'

const MatchCard = ({ match }) => {
    return (
        <div className="match-card">
            <div style={headerStyle}>
                <span>{match.matchType}</span>
                <span>{match.matchNumber}</span>
            </div>
            <div>
                <div>
                    <strong>{match.teams[0].team}</strong> - {match.teams[0].score}
                </div>
                <div>
                    <strong>{match.teams[1].team}</strong> - {match.teams[1].score}
                </div>
            </div>
            <div>{match.result}</div>
            <div>
                {match.details.map((detail, index) => (
                    <span key={index}>{detail}</span>
                ))}
            </div>
        </div>
    );
};

export default MatchCard;
