import React from 'react';
import Download from './Download';
import Explore from './Explore';

const ExploreSection = () => {
    return (
        <div>
            <Explore></Explore>
            <div>
            <Download></Download>
            </div>
        </div>
    );
};

export default ExploreSection;