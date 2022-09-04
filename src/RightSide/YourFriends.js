import React from 'react';

const YourFriends = () => {
    return (
        <div>
                <div className='mt-3'>
            <div  class=" p-1 w-full text-center bg-white rounded-lg border shadow-md ">
    <h5 class="mb-2 text-xl font-bold text-black text-left">Your Friends</h5>


        <div className='p-4'>
        <div className="flex items-center bg-slate-200 rounded-3xl" >
        
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 pt-0.5 text-slate-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="ml-3 py-2 outline-none bg-transparent w-20 " type="text" name="search" id="search"  />
      </div>

    <div className='mt-3 p-2'> 
    <div class="flex items-center space-x-4 m-2">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
    <div class="font-medium dark:text-white">
       
        <div class="text-sm text-gray-500 dark:text-gray-400">Admin</div>
    </div>
</div>
<div class="flex items-center space-x-4 m-2">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
    <div class="font-medium dark:text-white">
        
        <div class="text-sm text-gray-500 dark:text-gray-400">Admin</div>
    </div>
</div>
    </div>
        </div>
</div>
        </div>
        </div>
    );
};

export default YourFriends;