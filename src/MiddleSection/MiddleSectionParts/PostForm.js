import React from 'react';

const PostForm = () => {
    return (
        <div>
             <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
                <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
                    <img className="w-10 h-10 rounded-full" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/284925924_2138000919694101_3014536371273069646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pm0yU5C9rIQAX9YjQrh&_nc_oc=AQm2gvMnY44_qf1OTLM4Z_WdCK39gNPvS1Hd4a8HSN4Tc30DajbOwbHJfKsvsdBxhsg&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_gSQMZSxeA-8lmziB_Gm8sh7gEqFC8xLaqpj4bQdD5pw&oe=6317BAAE" alt="" srcset=""  />
                  
                    <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
                        <span>
                            Create a post
                        </span>
                    </div>
                </div>
                <div className="p-2 flex">
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                        <i className='bx bxs-video-plus'><svg className="w-6 h-6 text-gray-500 dark:text-dark-txt" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg></i>
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Background</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                        <i className='bx bx-images'><svg className="w-6 h-6 text-gray-500 dark:text-dark-txt" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></i>
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
                        <i className='bx bx-smile'><svg className="w-6 h-6 text-gray-500 dark:text-dark-txt" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></i>
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostForm;