import React from 'react';

const MightLikePeople = () => {
    return (
        <div>
             <div className=''>
            <div  class=" p-1 w-full text-center bg-white rounded-lg border shadow-md ">
    <h5 class= " p-2 mb-2 text-xl font-bold text-black text-left">You Might Like</h5>
    <hr className='w-30 p-3 m-3' />

   <div>
   <div class="flex p-3 text-left space-x-4">
    <img class="w-10 h-10 rounded-full" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/257165035_1990748287752699_2808060102741849718_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHsNLBTO-Arcrv2-PviqGoesZTVu8PRFa2xlNW7w9EVragumaGGz89YWoyUpLMW4Row1lvmvUkf0ifnUMEdZTtK&_nc_ohc=uo0sDfdFZc0AX-98eiS&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT-HrekASLMzvGo61YjWkMl1HI3csrr7ZL2UI5RApCSizA&oe=631A3C1B" alt=""/>
    <div class="font-medium dark:text-black">
        <div>Jese Leos</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">5 mutual</div>
    </div>
    
</div>
<div class="flex items-center justify-center  space-x-3 ">
<button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 ">Ignore</button>
<button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Follow</button>
        </div>
   </div>
</div>
        </div>
        </div>
    );
};

export default MightLikePeople;