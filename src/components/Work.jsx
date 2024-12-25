import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//img
import Img1 from '../assets/portfolio-magos3d.png'
import Img2 from '../assets/portfolio-fullstore.png'
import Img3 from '../assets/portfolio-confluencia.png'
import Img4 from '../assets/portfolio-magos369.jpg'
const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10 '>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
          {/* text */}
          <div className=' lg:mt-0 '>
            <h2 className='h2 leading-tight text-accent '>
              My Latest  <br />
            Work.
            </h2>

            {/* <h3 className='h3 mb-4'>I'm a Freelance full stack developer </h3> */}
          <p className='mb-6'>
          <p className='mb-12 text-xl' >
          I have experience in project development using a variety of technologies and frameworks. Currently, I specialize in integrating AWS cloud services with application development using React and Express. My adaptability enables me to work efficiently with diverse tools and technologies, tailoring each project to meet specific requirements. Additionally, my commitment to continuous learning ensures that I stay updated with the latest trends in web development and cloud computing, allowing me to deliver innovative and high-quality solutions.


</p></p>
            {/* <button className='btn btn-sm mt-6'>View all projects</button> */}
          </div>

    {/* image */}
    <a href='https://magos369.com.ar/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
             {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img4} 
              alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-6
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Calendario de Cultivo<br />AWS Cloud-React-Express-TailwindCSS</span>
              
                </div>
          </div></a>

        
       
        </motion.div>

        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
                {/* image */}
          <a href='https://magos3D.com.ar'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
             {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img1} 
              alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-6
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Magos3D <br />AWS Cloud-React-Express-TailwindCSS</span>
              
                </div>
          </div></a>
             
             

             {/* image */}
          <a href='https://fullstore-gaming.com/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
             {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img2} 
              alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-6
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Full Store Gaming <br />Hostinger-WordPress-WooCommerce</span>
              
                </div>
          </div></a>

                
                     {/* <a href='https://serviciosconfluencia.com.ar/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>

            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
            
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img3} 
              alt="" />
          
              <div className='absolute -bottom-full left-12 group-hover:bottom-6
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
         
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Servicios Confluencia<br />React-Laravel-TailwindCSS</span>
              
                </div>
          </div></a> */}
        </motion.div>

        
      </div>
    </div>
    </section>
  );
};

export default Work;
