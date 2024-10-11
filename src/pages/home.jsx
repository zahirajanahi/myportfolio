import React, { useEffect, useRef } from 'react';
import '../css/home.css';
import 'animate.css';
// import Typewriter from 'typewriter-effect';
import { Images } from "../constant";

const Home = (props) => {
  return (
    <>
      <div className='home h-[800vh] text-white'>
        <div className='title pt-14'>
            <h1 className='text-[#ffc903] text-8xl ps-20'>Zahira Janahi</h1>
            <h1 className='text-8xl ps-[440px]'>Front-</h1>
            <h1 className='text-8xl ps-[440px]'>End Developer</h1>
        </div>

        <section className='flex'>
            <div className='flex  gap-56'>

                  <div className="whoAmI">
                      <div className='fourCircles ps-20 pt-28'>

                        <div className='flex gap-1 items-center'>
                          <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div> 
                          <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>  
                          <div className='h-4 ps-2 text-lg'>Who am I ?</div>
                        </div>

                      <div className='flex gap-1 '>
                      <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>
                      <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>
                      </div>
                        
                      </div>

                      <div className='w-96 ps-20 pt-2'>
                      I'm Zahira Janahi, a passionate front-end developer with a strong background in building visually appealing,
                      user-centric websites and applications. With expertise in HTML, CSS, JavaScript, and modern frameworks like
                      React and Tailwind CSS, I focus on creating responsive and dynamic interfaces that enhance the user experience.
                      I'm always eager to take on new challenges and continuously improve my skills to stay updated with the latest technologies.

                      </div>

                  </div>  
                    
                  <div className="home__img "></div>
                        
              </div>


              <div className="quotes pt-48">
                      <div className='fourCircles ps-40 pt-36'>

                        <div className='flex gap-1 items-center'>
                          <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div> 
                          <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>  
                          <div className='h-4 ps-2 text-lg'>Quotes</div>
                        </div>

                      <div className='flex gap-1 '>
                      <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>
                      <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>
                      </div>
                        
                      </div>

                      <div className='w-96 ps-40 pt-2'>
                      Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

                      </div>

              </div>
              
        </section>
    
        <section className="skills ps-20 pb-32 pt-44 ">
        
        <div className='fourCircles ps-20 pb-10'>
            <div className='flex gap-1 items-center '>
              <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div> 
              <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>  
              <div className='h-4 ps-2 text-lg '>Skills</div>
            </div>

            <div className='flex gap-1 '>
            <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>
            <div className='border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500'></div>
            </div>
        </div>
        
        <div className="flex gap-10 ps-20">
          
            <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white">
              
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div> 
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div> 
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
              <img src={Images.htmlcss} alt="Skill 1" className="w-full h-full object-cover" />
            </div>

            <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white mt-20 ">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
              react
            </div>

            <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white  ">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
              js
            </div>

            <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white mt-20 ">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
              laravel
            </div>
            
            <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white  ">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
              sass tailwind bootstrap
            </div>

         </div>

        </section>
































      </div>

    </>
  );
};

export default Home;
