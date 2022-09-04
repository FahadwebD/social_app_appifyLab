import React from 'react';
import angry from '../../assests/images/reaction/angry.svg'
import like from '../../assests/images/reaction/like.svg'
import love from '../../assests/images/reaction/love.svg'

const PostCardTwo = () => {
    return (
        <div>
            
                <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
                   
                    <div className="flex items-center justify-between px-4 py-2">
                        <div className="flex space-x-2 items-center">
                            <div className="relative">
                                <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/267706434_2013076932186501_2068881691305878_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFTdoumto0qeUUONwnoCvj-OFAvoaJ8dAE4UC-honx0AUXaGlb8hoCQJXJ6q4lXTmhvNgBLrJbONOMk93rUIU9n&_nc_ohc=i3tyA1BOvksAX_yICz5&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT89b2tLh-4KZil8LbHjsN6yOR49GYcB2HY7igwCo5u4wQ&oe=6318BD05" alt="Profile picture" className="w-10 h-10 rounded-full"/>
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
                    
                    <div className="p-2">
                        <div className="grid grid-cols-2 gap-1 my-1">
                            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="Post image"/>
                            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="Post image"/>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="Post image"/>
                            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="Post image"/>
                            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
  <a href="#">
  <img style={{filter: 'brightness(50%)'}} className='grayscale ' src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="Post image"/>
  </a>
  <figure className="absolute left-50% bottom-50% px-8 text-lg text-white">
      <p>+1</p>
  </figure>
</figure>
                            </div>
                           
                        
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
                            <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/267706434_2013076932186501_2068881691305878_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFTdoumto0qeUUONwnoCvj-OFAvoaJ8dAE4UC-honx0AUXaGlb8hoCQJXJ6q4lXTmhvNgBLrJbONOMk93rUIU9n&_nc_ohc=i3tyA1BOvksAX_yICz5&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT89b2tLh-4KZil8LbHjsN6yOR49GYcB2HY7igwCo5u4wQ&oe=6318BD05" alt="Profile picture" className="w-9 h-9 rounded-full"/>
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
                                    <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/267706434_2013076932186501_2068881691305878_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFTdoumto0qeUUONwnoCvj-OFAvoaJ8dAE4UC-honx0AUXaGlb8hoCQJXJ6q4lXTmhvNgBLrJbONOMk93rUIU9n&_nc_ohc=i3tyA1BOvksAX_yICz5&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT89b2tLh-4KZil8LbHjsN6yOR49GYcB2HY7igwCo5u4wQ&oe=6318BD05" alt="Profile picture" className="w-9 h-9 rounded-full"/>
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
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                       
                        <div className="flex space-x-2">
                            <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/267706434_2013076932186501_2068881691305878_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFTdoumto0qeUUONwnoCvj-OFAvoaJ8dAE4UC-honx0AUXaGlb8hoCQJXJ6q4lXTmhvNgBLrJbONOMk93rUIU9n&_nc_ohc=i3tyA1BOvksAX_yICz5&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT89b2tLh-4KZil8LbHjsN6yOR49GYcB2HY7igwCo5u4wQ&oe=6318BD05" alt="Profile picture" className="w-9 h-9 rounded-full"/>
                            <div>
                                <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                                    <span className="font-semibold block">John Doe</span>
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptate ipsa animi corrupti unde, voluptatibus expedita suscipit, itaque, laudantium accusantium aspernatur officia repellendus nihil mollitia soluta distinctio praesentium nulla eos?</span>
                                </div>
                                <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                                    <span className="font-semibold cursor-pointer">Like</span>
                                    <span>.</span>
                                    <span className="font-semibold cursor-pointer">Reply</span>
                                    <span>.</span>
                                    10m
                                </div>
                              
                                <div className="flex space-x-2">
                                    <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/267706434_2013076932186501_2068881691305878_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFTdoumto0qeUUONwnoCvj-OFAvoaJ8dAE4UC-honx0AUXaGlb8hoCQJXJ6q4lXTmhvNgBLrJbONOMk93rUIU9n&_nc_ohc=i3tyA1BOvksAX_yICz5&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT89b2tLh-4KZil8LbHjsN6yOR49GYcB2HY7igwCo5u4wQ&oe=6318BD05" alt="Profile picture" className="w-9 h-9 rounded-full"/>
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
                                    </div>
                                </div>
                         
                            </div>
                        </div>
                    
                    </div>
                   
                    <div className="py-2 px-4">
                        <div className="flex space-x-2">
                            <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/267706434_2013076932186501_2068881691305878_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFTdoumto0qeUUONwnoCvj-OFAvoaJ8dAE4UC-honx0AUXaGlb8hoCQJXJ6q4lXTmhvNgBLrJbONOMk93rUIU9n&_nc_ohc=i3tyA1BOvksAX_yICz5&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT89b2tLh-4KZil8LbHjsN6yOR49GYcB2HY7igwCo5u4wQ&oe=6318BD05" alt="Profile picture" className="w-9 h-9 rounded-full"/>
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

export default PostCardTwo;