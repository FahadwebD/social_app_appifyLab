import React from 'react';
import MightLikePeople from './MightLikePeople';
import YourFriends from './YourFriends';

const RightSide = () => {
    return (
        <div className='sticky top-16'>
            <MightLikePeople>
            </MightLikePeople>
            <YourFriends></YourFriends>
        </div>
    );
};

export default RightSide;