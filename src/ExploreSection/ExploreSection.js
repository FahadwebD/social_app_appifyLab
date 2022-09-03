import React from 'react';
import Download from './Download';
import Explore from './Explore';
import SuggestedPeople from './SuggestedPeople';

const ExploreSection = () => {
    return (
        <div>
            <Explore ></Explore>
            <Download></Download>
            <SuggestedPeople></SuggestedPeople>
        </div>
    );
};

export default ExploreSection;