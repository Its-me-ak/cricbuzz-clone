import React from 'react';
import MatchList from './MatchList';


const HomeLayout = () => {
    return (
        <div className="homepage">
           
                <div className="category-section">
                    <MatchList />
                </div>
        </div>
    );
};

export default HomeLayout;
