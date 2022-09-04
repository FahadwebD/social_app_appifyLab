import React from 'react';
import Download from './Download';
import Explore from './Explore';
import SuggestedPeople from './SuggestedPeople';

const ExploreSection = () => {
    return (
        <div className='sticky top-16'>
            <Explore ></Explore>
            <Download></Download>
            <SuggestedPeople></SuggestedPeople>
        </div>
    );
};

export default ExploreSection;