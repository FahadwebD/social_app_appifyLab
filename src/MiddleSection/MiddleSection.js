import React from 'react';
import JustPostCard from './MiddleSectionParts/JustPostCard';
import PostForm from './MiddleSectionParts/PostForm';
import StorySection from './MiddleSectionParts/StorySection';

const MiddleSection = () => {
    return (
        <div>
            <StorySection></StorySection>
            <PostForm></PostForm>
            <JustPostCard></JustPostCard>
            
        </div>
    );
};

export default MiddleSection;