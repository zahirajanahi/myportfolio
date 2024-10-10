import React from 'react';
import '../css/home.css';
import 'animate.css';
import { Images } from "../constant";

const Home = (props) => {
  return (
    <>
      <div className='home h-[800vh]'>
        <nav className='bg-[#faf7f2] flex justify-between items-center ps-10 border-2 border-b-black p-5 font-medium'>
          <div className='flex gap-3'>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact me</a>
          </div>

          <div className='flex gap-1'>
            <div className='h-4 w-4 border-2 border-black bg-[#e7bbbb] rounded-full'></div>
            <div className='h-4 w-4 border-2 border-black bg-[#e4e2a9] rounded-full'></div>
            <div className='h-4 w-4 border-2 border-black bg-[#b9c7c9] rounded-full'></div>
          </div>
        </nav>

        <section className='flex gap-80 bg-[#faf7f2] pb-32'>
          <div>
            <h1 className='text-8xl ps-10 pt-20 text-gray-800 animate__animated animate__fadeInLeft'>
              hi, my name is
            </h1>
            <i>
              <h1 className='text-8xl ps-36 text-gray-800 animate__animated animate__fadeInLeft pb-7'>
                zahira janahi
              </h1>
            </i>

            <p className='ps-7'>
              * I'm Zahira Janahi, a front-end developer specializing in creating responsive <br />
              and user-friendly web interfaces. With expertise in JavaScript, <br />
              React, and UI/UX design, I focus on delivering clean, efficient,<br />
              and visually appealing solutions that enhance user experiences. <br />
              Let’s bring ideas to life through code
            </p>

            <button className="button-54 ms-7 mt-5" role="button">Read more</button>
          </div>

          <div className='pt-20'>
            <img src={Images.landigPage} alt="" className='w-96 h-96' />
          </div>
        </section>

        
        <section className='text-center bg-[#faf7f2]'>
          <div className='flex justify-center items-center  relative'>
           
            <div className='absolute top-1/2 left-0 right-0 h-[2px] bg-black'></div>

 
            <a href="#" className='flex items-center justify-center border-2 border-black px-16 py-2 font-medium bg-[#faf7f2] z-10'>
              Blog
              <span className='ml-2'>&#8594;</span>
            </a>
            <a href="#" className='flex items-center justify-center border-2 border-black px-16 py-2 font-medium bg-[#faf7f2] z-10'>
              Projects
              <span className='ml-2'>&#8594;</span>
            </a>
            <a href="#" className='flex items-center justify-center border-2 border-black px-16 py-2 font-medium bg-[#faf7f2] z-10'>
              About
              <span className='ml-2'>&#8594;</span>
            </a>
            <a href="#" className='flex items-center justify-center border-2 border-black px-16 py-2 font-medium bg-[#faf7f2] z-10'>
              Contact
              <span className='ml-2'>&#8594;</span>
            </a>
          </div>
        </section>
      <section className='bg-[#faf7f2]'>



      </section>
      </div>
    </>
  );
};

export default Home;
