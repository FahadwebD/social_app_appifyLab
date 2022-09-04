import React from 'react';
import JustPostCard from './MiddleSectionParts/JustPostCard';
import PollPost from './MiddleSectionParts/PollPost';
import PostCardTwo from './MiddleSectionParts/PostCardTwo';
import PostForm from './MiddleSectionParts/PostForm';
import StorySection from './MiddleSectionParts/StorySection';

const MiddleSection = () => {
    return (
        <div>
            <StorySection></StorySection>
            <PostForm></PostForm>
            <PollPost></PollPost>
            <JustPostCard></JustPostCard>
            <PostCardTwo></PostCardTwo>
            
        </div>
    );
};

export default MiddleSection;