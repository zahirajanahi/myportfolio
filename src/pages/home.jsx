import React from 'react';
import '../css/home.css';
import 'animate.css';
import { motion } from 'framer-motion';
import { Images } from "../constant";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
//import Carousel from './carousel';
const Home = (props) => {

  
  return (
    <>
    


      <div className='home h-auto text-white bg-black'>
    
      <div className='pt-16'>
        
          {/* Animate Zahira Janahi */}
          <motion.h1
            className='text-[#ffc903] text-8xl ps-20'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Zahira Janahi
          </motion.h1>

          {/* Animate Front- */}
          <motion.h1
            className='text-8xl ps-[440px]'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Front-
          </motion.h1>

          {/* Animate End Developer */}
          <motion.h1
            className='text-8xl ps-[440px]'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            End Developer
          </motion.h1>
        </div>
        <section className='flex'>
            <div className='flex  gap-40'>

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
                    
                  <div className="home__img tilt-img"></div>
                        
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
    
        <section className="skills">

        <div class="layout">
	<div class="box">High-end, full-service<br />front-end devolopement<br />for lifestyle branding.</div>
         </div>
         <div class="social">
  <a href="https://www.linkedin.com/in/zahira-janahi-4a4590263/"  target="_blank" rel="noopener noreferrer">
    <svg>
      <use href="#ico-linkedin"></use>
    </svg>
  </a>
  <a href="https://github.com/zahirajanahi" target="_blank" rel="noopener noreferrer"> 
    <svg>
      <use href="#ico-github"></use>
    </svg>
  </a>
        </div>
        <svg>
  <symbol id="ico-linkedin" viewBox="0 0 35 35">
    <circle opacity=".2" cx="17.5" cy="17.5" r="17" stroke="var(--fill)" fill="none"></circle>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.3025 14.0835C15.3025 14.3845 15.1934 14.6403 14.9752 14.851C14.757 15.0617 14.4786 15.167 14.14 15.167C13.8014 15.167 13.5267 15.0617 13.316 14.851C13.1053 14.6403 13 14.3807 13 14.0722C13 13.7637 13.1053 13.5079 13.316 13.3047C13.5267 13.1016 13.8051 13 14.1512 13C14.4974 13 14.772 13.1016 14.9752 13.3047C15.1783 13.5079 15.2874 13.7675 15.3025 14.0835ZM13.0677 23V16.0248H15.2348V23H13.0677ZM16.4763 16.0248C16.5064 16.8676 16.5214 17.6125 16.5214 18.2596V23H18.7111V18.9819C18.7111 18.7111 18.7336 18.5305 18.7788 18.4402C18.9895 17.8984 19.3582 17.6275 19.8849 17.6275C20.6223 17.6275 20.991 18.1317 20.991 19.14V23H23.158V18.8691C23.158 17.8758 22.9285 17.1272 22.4695 16.623C22.0105 16.1189 21.4048 15.8668 20.6524 15.8668C19.6742 15.8668 18.9594 16.243 18.5079 16.9955H18.4628L18.3499 16.0248H16.4763Z"
      transform="translate(0 -1)"
      fill="var(--fill)">
    </path>
  </symbol>

  <symbol id="ico-github" viewBox="0 0 40 40">
    <circle opacity=".2" cx="17.5" cy="17.5" r="17" stroke="var(--fill)" fill="none"></circle>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5 0C7.84 0 0 7.84 0 17.5c0 7.73 5.021 14.268 11.9 16.56.87.16 1.188-.377 1.188-.837 0-.413-.016-1.5-.026-2.943-4.838 1.048-5.858-2.329-5.858-2.329-.789-2.004-1.926-2.537-1.926-2.537-1.579-1.08.121-1.06.121-1.06 1.753.123 2.679 1.797 2.679 1.797 1.557 2.67 4.086 1.898 5.08 1.515.16-1.128.61-1.898 1.112-2.333-3.883-.44-7.96-1.94-7.96-8.617 0-1.903.678-3.457 1.794-4.686-.178-.44-.778-2.227.171-4.642 0 0 1.472-.471 4.828 1.793a16.734 16.734 0 0 1 4.396-.592c1.493.007 2.993.202 4.396.592 3.355-2.264 4.828-1.793 4.828-1.793.949 2.415.348 4.202.171 4.642 1.116 1.229 1.794 2.783 1.794 4.686 0 6.688-4.08 8.176-7.972 8.609.627.542 1.181 1.605 1.181 3.236 0 2.33-.021 4.22-.021 4.788 0 .463.314 1.004 1.198.836C29.478 31.77 35 25.233 35 17.5 35 7.84 27.16 0 17.5 0z"
      fill="var(--fill)">
    </path>
  </symbol>
        </svg>

         <div className="fourCircles ps-20 pb-10">
    <div className="flex gap-1 items-center">
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="h-4 ps-2 text-lg">Technical <span className='text-yellow-500'>Expertise</span></div>
    </div>

    <div className="flex gap-1">
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
    </div>
          </div>
          <div className='text-center pb-10 "'>-The technologies I rely on to turn ideas into reality-</div>
  <div className="flex gap-10 ps-20">
    {/* Card 1 */}
    <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white animate-float">
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
      <img src={Images.html} alt="Skill 1" className="w-full h-full object-cover" />
    </div>

    {/* Card 2 */}
    <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white mt-20 animate-float-slower">
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
      <img src={Images.react} alt="Skill 1" className="w-[10vw] " />
    </div>

    {/* Card 3 */}
    <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white animate-float">
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
      <img src={Images.js} alt="Skill 1" className="w-[10vw] " />

    </div>

    {/* Card 4 */}
    <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white mt-20 animate-float-slower">
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
      <img src={Images.lrvl} alt="Skill 1" className="w-[10vw] " />
    </div>

    {/* Card 5 */}
    <div className="relative w-40 h-40 p-6 m-6 bg-[#131313] text-white animate-float">
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-yellow-400"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400"></div>
      <img src={Images.git} alt="Skill 1" className="w-[10vw] " />
      </div>
  </div>
      <button className='ms-20  px-5 py-3  text-[#ffca2c]'>Read more</button>
</section>
<div className='flex pt-28 ps-48 justify-between '>
<div className=' text-sm'>- As a passionate front-end developer, <br /> I've built dynamic, responsive web  <br />applications  and intuitive user <br /> interfaces with
   a focus on usability <br />and performance. Below are a few <br /> featured projects that reflect my  <br />technical proficiency and design aesthetic -</div>
   <div className="fourCircles pe-32 pt-40 pb-20 ">
    <div className="flex gap-1 items-center">
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="h-4 ps-2 text-lg ">Projects</div>
    </div>

    <div className="flex gap-1">
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
    </div>
  </div>
</div>

 


    <div class="cursor"></div>
     <div class="cursor cursor2"></div>


   <section className="projects ">



  <div class="container ps-10 ">
<article class="card cardd">
    <div >
        <img src={Images.sg} alt="" className='h-[20vw] w-[50vh] pb-20 ' />
    </div>

<div class="card_content">
    <span class="card_title">This is a Title</span>
        <span class="card_subtitle">See My Project in Action. <a href="https://www.pinterest.fr/" className='text-yellow-600'  target="_blank" rel="noopener noreferrer">Visit SocialGeek</a> </span>
        <p class="card_description">A React-based social platform where users can create, update, and delete posts with text, images, and videos.
           It includes a carousel for multiple images, a story section, and a responsive friends list with follow/unfollow functionality.</p>
    
</div>
</article>
<article class="card cardd">
    <div >
        <img src={Images.cofee} alt="" className='h-[20vw] w-[50vh] pb-20 ' />
    </div>

<div class="card_content">
    <span class="card_title">This is a Title</span>
    <span class="card_subtitle">See My Project in Action. <a href="https://www.pinterest.fr/" className='text-yellow-600'  target="_blank" rel="noopener noreferrer">Visit Brew & Bean</a> </span>
    <p class="card_description">A beautifully designed web application where users can explore and order a variety of coffee products. Built using React, this app offers a seamless shopping experience, allowing users to browse detailed coffee descriptions</p>
    
</div>
</article>
<article class="card cardd">
    <div >
        <img src={Images.delicious} alt="" className='h-[20vw] w-[50vh] pb-20 ' />
    </div>

<div class="card_content">
    <span class="card_title">This is a Title</span>
    <span class="card_subtitle">See My Project in Action. <a href="https://www.pinterest.fr/" className='text-yellow-600'  target="_blank" rel="noopener noreferrer">Visit Delicious</a> </span>
        <p class="card_description">A minimalist web application designed to showcase a restaurant's key details, including its menu, chefs, and location. Built with React, the app features a clean and intuitive interface where users can explore the restaurant’s offerings.</p>
    
</div>
</article>
<article class="card cardd">
    <div >
        <img src={Images.fsh} alt="" className='h-[20vw] w-[50vh] pb-20 ' />
    </div>

<div class="card_content">
    <span class="card_title">This is a Title</span>
    <span class="card_subtitle">See My Project in Action. <a href="https://www.pinterest.fr/" className='text-yellow-600'  target="_blank" rel="noopener noreferrer">Visit Fash.</a> </span>
        <p class="card_description">An interactive online store built with React, offering users a smooth and intuitive shopping experience. The app allows customers to browse through a range of products with detailed descriptions, images, and prices.ensuring easy navigation and product viewing.</p>
    
</div>
</article>

</div>
   
  <div className='flex  justify-center pt-28'>
  <div className='pe-32 pt-16'>
  <div className="fourCircles pb-6">
    <div className="flex gap-1 items-center">
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="h-4 ps-2 text-lg ">Responsive <span className='text-yellow-600'>Design</span></div>
    </div>

    <div className="flex gap-1">
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="border-2 border-yellow-500 w-2 h-2 rounded-full bg-yellow-500"></div>
    </div>
  </div>
    <div className='text-sm'>I specialize in crafting responsive <br /> websites that deliver a consistent <br /> and intuitive user experience across <br />
     all devices. Whether it's a mobile,<br /> tablet, or desktop screen, my designs <br /> are built to adapt flawlessly, ensuring <br />
      smooth navigation and functionality <br />
      without compromising aesthetics</div>
    </div>
  <img src={Images.phone} alt=""  className=' h-[80vh] '/> 
  <img src={Images.phone2} alt="" className='h-[95vh]  pt-40  ' /> 
  </div>
   
   </section>
    
<section className='h-[100vh] pt-20'>
  <div className='ps-28 text-yellow-600 text-3xl'><h1>Contact me</h1></div>
  <p className='ps-72 pt-10'>- Feel free to contact me any time. I will get back to you as soon as I can -</p>
  <form action="" className='ps-64 pt-14'>
    <div className='relative'>
      <FiLinkedin className='absolute left-[60vw] top-4 text-gray-400 text-2xl' />
      <div className="form__group field">
        <input type="input" className="form__field" placeholder="Name" required=""/>
        <label htmlFor="name" className="form__label">Name</label>
      </div>
    </div>
    <div className='relative mt-5'>
      <FiGithub className='absolute left-[60vw] top-4 text-gray-400 text-2xl' />
      <div className="form__group field">
        <input type="input" className="form__field" placeholder="Email" required=""/>
        <label htmlFor="email" className="form__label">Email</label>
      </div>
    </div>
    <div className='relative mt-5'>
      <div className="form__group field">
        <textarea className="form__field" placeholder="Message" required=""></textarea>
        <label htmlFor="message" className="form__label">Message</label>
      </div>
    </div>
  </form>
  <div className="buttons">
    <button className='ms-64 border-[1px] border-yellow-600 mt-10 px-4 py-3 rounded-full'>Download CV</button>
    <button className='text-yellow-600 ms-[480px]'>Send</button>
  </div>
</section>



  











   





       
      </div>

    </>
  );
};

export default Home;
