import React from 'react';

const StorySection = () => {
    return (
        <div className="flex space-x-2 mx-auto max-w-2xl relative">
       
        <div className="w-36 h-52  overflow-hidden flex flex-col group cursor-pointer relative">
            <img className="w-full h-4/5 object-cover transition rounded-t-2xl duration-300 ease-in-out transform group-hover:scale-105" src="https://iio.azcast.arizona.edu/sites/default/files/profile-blank-whitebg.png" alt="Me"/>
            <div className="bg-gray-800 relative flex-1 flex flex-col rounded-t-2xl rounded-b-none ">
                <div className="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <div className="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
                    <p>
                        Create Story
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
        </div>
       
        <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
            <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/284925924_2138000919694101_3014536371273069646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pm0yU5C9rIQAX9YjQrh&_nc_oc=AQm2gvMnY44_qf1OTLM4Z_WdCK39gNPvS1Hd4a8HSN4Tc30DajbOwbHJfKsvsdBxhsg&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_gSQMZSxeA-8lmziB_Gm8sh7gEqFC8xLaqpj4bQdD5pw&oe=6317BAAE" alt="MD. Shibbir Ahmed"/>

            <div className="w-6 h-6 border-2 box-content border-gray-800 rounded-full overflow-hidden absolute right-2.5 top-3">
                <img className="w-full h-full object-cover" src="https://iio.azcast.arizona.edu/sites/default/files/profile-blank-whitebg.png" alt="someone"/>
            </div>

            <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">Fahad Ahmed Chowdury</p>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

        </div>
        
       
    </div>
    );
};

export default StorySection;