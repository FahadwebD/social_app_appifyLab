import React from 'react';
import angry from '../../assests/images/reaction/angry.svg'
import like from '../../assests/images/reaction/like.svg'
import love from '../../assests/images/reaction/love.svg'
import './responsive.css'
const PollPost = () => {
    return (
        <div>
           <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
    
    <div className="flex items-center justify-between px-4 py-2">
        <div className="flex space-x-2 items-center">
            <div className="relative">
                <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/284925924_2138000919694101_3014536371273069646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pm0yU5C9rIQAX9YjQrh&_nc_oc=AQm2gvMnY44_qf1OTLM4Z_WdCK39gNPvS1Hd4a8HSN4Tc30DajbOwbHJfKsvsdBxhsg&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_gSQMZSxeA-8lmziB_Gm8sh7gEqFC8xLaqpj4bQdD5pw&oe=6317BAAE" alt="Profile picture" className="w-10 h-10 rounded-full"/>
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>
                <div className="font-semibold">
                    John Doe
                </div>
                <span className="text-sm text-gray-500">38m</span>
            </div>
        </div>
        <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
            <i className='bx bx-dots-horizontal-rounded'></i>
        </div>
    </div>
 
    <div className="text-justify px-4 py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, autem earum cum ullam odio, molestias maxime aperiam in id aspernatur vel ratione odit molestiae minus ipsa obcaecati quia! Doloribus, illum.
    </div>
   <div className=''>
   <div id="toast-default" class="flex items-center space-x-12 p-4 w-full max-w-xs text-gray-500  " role="alert">
  <div className='flex items-center '>
  <input  checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 p-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <div  class=" poll-text ml-3 text-sm font-normal bg-white rounded py-1  shadow bg-slate-200"><p>Hhjhsj</p><p>Hhjhsj</p>
    </div>
  </div>
   <div>
   <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8  rounded-3xl  bg-slate-200">
    <img class="w-8 h-8 rounded-full" src="https://www.mzchr.ru/wp-content/uploads/2021/09/avasite.png" alt=""/>
        
    </div>
   <div>
   <div class="flex justify-between"><small className='me-1'>1</small> <small>vote</small></div>
   </div>
   </div>
    <button type="button" class="ml-auto -mx-1 -my-1 bg-white text-gray-400 hover:text-gray-900 rounded-3xl focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-6 w-6 dark:text-gray-500 dark:hover:text-white bg-slate-200 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>






<div id="toast-default" class="flex items-center space-x-12 p-4 w-full max-w-xs text-gray-500  " role="alert">
  <div className='flex items-center '>
  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <div  class="poll-text ml-3 text-sm font-normal bg-white rounded py-1  shadow bg-slate-200"><p>Hhjhsj</p><p>Hhjhsj</p>
    </div>
  </div>
   <div>
   <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8  ">
    
        
    </div>
   <div>
   
   </div>
   </div>
    <button type="button" class="ml-auto -mx-1 -my-1 bg-white text-gray-400 hover:text-gray-900 rounded-3xl focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-6 w-6 dark:text-gray-500 dark:hover:text-white bg-slate-200 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>

<div id="toast-default" class="flex items-center space-x-12 p-4 w-full max-w-xs text-gray-500  " role="alert">
  <div className='flex items-center '>
  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <div  class="poll-text ml-3 text-sm font-normal bg-white rounded py-1  shadow bg-slate-200"><p>Hhjhsj</p><p>Hhjhsj</p>
    </div>
  </div>
   <div>
   <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8  ">
    
        
    </div>
   <div>
   
   </div>
   </div>
    <button type="button" class="ml-auto -mx-1 -my-1 bg-white text-gray-400 hover:text-gray-900 rounded-3xl focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-6 w-6 dark:text-gray-500 dark:hover:text-white bg-slate-200 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>

   </div>









    <div className="py-2">
        
    </div>
 
    <div className="px-4 py-2">
        <div className="flex items-center justify-between">
            <div className="flex flex-row-reverse items-center">
                <span className="ml-2 text-gray-500 dark:text-dark-txt">999</span>
                <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-800">
                    <i className='bx bxs-angry'><img src={angry} alt="" srcset="" /></i>
                </span>
                <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-500">
                    <i className='bx bxs-heart-circle'><img src={love} alt="" srcset="" /></i>
                </span>
                <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
                    <i className='bx bx-happy-alt'><img src={like} alt="" srcset="" /></i>
                </span>
            </div>
            <div className="text-gray-500 dark:text-dark-txt">
                <span>90 comments</span>
                <span>66 Shares</span>
            </div>
        </div>
    </div>
   
    <div className="py-2 px-4">
        <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
            <div className="flex space-x-2">
                <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className='bx bx-like'><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg></i>
                    <span className="text-sm font-semibold">Like</span>
                </div>
                <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className='bx bx-comment'><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></i>
                    <span className="text-sm font-semibold">Comment</span>
                </div>
                <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className='bx bx-share bx-flip-horizontal'><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></i>
                    <span className="text-sm font-semibold">Share</span>
                </div>
            </div>
        </div>
    </div>
 
    <div className="py-2 px-4">
    
        <div className="flex space-x-2">
            <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/284925924_2138000919694101_3014536371273069646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pm0yU5C9rIQAX9YjQrh&_nc_oc=AQm2gvMnY44_qf1OTLM4Z_WdCK39gNPvS1Hd4a8HSN4Tc30DajbOwbHJfKsvsdBxhsg&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_gSQMZSxeA-8lmziB_Gm8sh7gEqFC8xLaqpj4bQdD5pw&oe=6317BAAE" alt="Profile picture" className="w-9 h-9 rounded-full"/>
            <div>
                <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                    <span className="font-semibold block">John Doe</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span className="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span className="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                </div>
            
                <div className="flex space-x-2">
                    <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/284925924_2138000919694101_3014536371273069646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pm0yU5C9rIQAX9YjQrh&_nc_oc=AQm2gvMnY44_qf1OTLM4Z_WdCK39gNPvS1Hd4a8HSN4Tc30DajbOwbHJfKsvsdBxhsg&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_gSQMZSxeA-8lmziB_Gm8sh7gEqFC8xLaqpj4bQdD5pw&oe=6317BAAE" alt="Profile picture" className="w-9 h-9 rounded-full"/>
                    <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                            <span className="font-semibold block">John Doe</span>
                            <img className='w-60 h-60' src="https://memegenerator.net/img/instances/57860623.jpg" alt="" />
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                            <span className="font-semibold cursor-pointer">Like</span>
                            <span>.</span>
                            <span className="font-semibold cursor-pointer">Reply</span>
                            <span>.</span>
                            10m
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
      
        
     
    </div>



    <div className="py-2 px-4">
        <div className="flex space-x-2">
            <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/284925924_2138000919694101_3014536371273069646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pm0yU5C9rIQAX9YjQrh&_nc_oc=AQm2gvMnY44_qf1OTLM4Z_WdCK39gNPvS1Hd4a8HSN4Tc30DajbOwbHJfKsvsdBxhsg&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_gSQMZSxeA-8lmziB_Gm8sh7gEqFC8xLaqpj4bQdD5pw&oe=6317BAAE" alt="Profile picture" className="w-9 h-9 rounded-full"/>
            <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                <input type="text" placeholder="Write a comment..." className="outline-none bg-transparent flex-1"/>
                <div className="flex space-x-0 items-center justify-center">
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i className='bx bx-smile'><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></i></span>
                
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i className='bx bxs-file-gif'><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></i></span>
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i className='bx bx-happy-heart-eyes'><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></i></span>
                </div>
            </div>
        </div>
    </div>

</div> 
        </div>
    );
};

export default PollPost;