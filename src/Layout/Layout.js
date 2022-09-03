import React from 'react';
import ExploreSection from '../ExploreSection/ExploreSection';
import MiddleSection from '../MiddleSection/MiddleSection';



const Layout = () => {
    return (
        <div className='container mx-auto mt-2'>
            <div class="grid grid-cols-4 gap-4">
  <div ><ExploreSection></ExploreSection></div>
  <div class=" col-span-2 "><MiddleSection></MiddleSection></div>
  <div class="bg-black">03</div>
  
</div>
        </div>
    );
};

export default Layout;