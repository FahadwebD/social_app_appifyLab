import React from 'react';
import ExploreSection from '../ExploreSection/ExploreSection';
import MiddleSection from '../MiddleSection/MiddleSection';
import MightLikePeople from '../RightSide/MightLikePeople';
import RightSide from '../RightSide/RightSide';



const Layout = () => {
    return (
        <div className='container mx-auto mt-2'>
            <div class="relative grid md:grid-cols-2 lg:grid-cols-4  gap-4 ">
  <div className='hidden md:block ' ><ExploreSection></ExploreSection></div>
  <div class=" col-span-2  "><MiddleSection></MiddleSection></div>
  <div className='hidden md:block '><RightSide></RightSide></div>
  
</div>
        </div>
    );
};

export default Layout;