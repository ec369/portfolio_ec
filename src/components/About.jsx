import React from 'react';
//countup
import   CountUp   from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants'; 
import { FaAws, FaBlender, FaBootstrap, FaCss3, FaDatabase, FaDochub, FaDocker, FaGit, FaGithub, FaLaravel, FaMicrosoft, FaPhp, FaReact } from 'react-icons/fa';
import { Link } from 'react-scroll';


const About = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto ssm:mb-36'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-mandala bg-contain bg-no-repeat h-[640px]   mix-blend-lighten bg-top'>

          </motion.div>
          {/* text */}
          <motion.div 
           variants={fadeIn('left', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className='flex-1  lg:h-[640px]'>
               {/* stats */}
               <h2 className='h2 text-accent'>SKILLS.</h2>
               <div className='grid grid-cols-5  lg:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-6 mb-12 ssm:grid-cols-3'>
                
                <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={1} duration={3}/> : null} 
                       </div>  */}
                           <div className='font-primary text-sm tracking-[2px] '>
                           {/* Years Experience <br /> */}
                            <FaAws className='text-[60px]'></FaAws>Amplify, S3, Route 53, Lambda, Cognito, DynamoDB, CloudWatch, IAM, CloudFormation, Billing and Cost Management, AWS Health Dashboard
                          
                           </div>
                   </div>
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                       </div>  */}
                           <div className='font-primary text-sm tracking-[2px] '>
                          {/* Years Experience <br /> */}
                        <FaReact className='text-[60px]'></FaReact>React -  TailwindCSS    
                           </div>
                   </div>
   
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={1} duration={3}/> : null} 
                       </div>  */}
                           <div className='font-primary text-sm tracking-[2px] '>
                          {/* Years Experience <br /> */}
                           <FaDocker className='text-[60px]'></FaDocker> Docker
                
                           </div>
                   </div>
   
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                       </div> */}
                           <div className='font-primary text-sm tracking-[2px]'>
                           {/* Year Experience <br />     */}
                           <br /> <FaGit className='text-[60px] '></FaGit>
                    
                           </div>
                   </div>
             
               
   
                 
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                       </div> */}
                           <div className='font-primary text-sm tracking-[2px]'>
                           {/* Years Experience <br />  */}
                              <br /> <FaLaravel className='text-[60px]'></FaLaravel>Laravel
                     
                           </div>
                   </div>
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                       </div> */}
                           <div className='font-primary text-sm tracking-[2px]'>
                           {/* Years Experience <br />   */}
                             <br /> <FaDatabase className='text-[60px]'></FaDatabase> Phpmyadmin
                    
                           </div>
                   </div>
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                       </div> */}
                           <div className='font-primary text-sm tracking-[2px]'>
                           {/* Years Experience <br />        */}
                           <br /><FaPhp className='text-[60px] '></FaPhp>
                    
                           </div>  
                   </div>
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={1} duration={3}/> : null} 
                       </div> */}
                           <div className='font-primary text-sm tracking-[2px]'>
                           {/* Year Experience <br />  */}
                               <br /> <FaMicrosoft className='text-[60px]'></FaMicrosoft>  Microsoft Visual Studio
                    
                           </div>
                   </div>
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={2} duration={3}/> : null} 
                       </div> */}
                           <div className='font-primary text-sm tracking-[2px]'>
                           {/* Years Experience <br />  */}
                        <br /> <FaBlender className='text-[60px]'></FaBlender>      Blender
                    
                           </div> 
                   </div>
                   <div>
                       {/* <div className='text-[40px] font-tertiary text-gradient mb-2'>
                        { inView ? <CountUp start={0} end={1} duration={3}/> : null} 
                       </div> */}
                           <div className='font-primary text-sm tracking-[2px]'>
                           {/* Year Experience <br /> */}
                          <br /> <FaDatabase className='text-[60px]'></FaDatabase>     MongoDB
                    
                           </div>
                   </div>
   
            
   
          
                </div>
       
          
              <div className='flex gap-x-8 items-center'>
              <Link to='contact' activeClass='active' smooth={true} spy={true} 
              className=' btn btn-lg cursor-pointer h-[60px] flex items-center justify-center'>
                CONTACT ME
                      </Link>
                      <Link to='work' activeClass='active' smooth={true} spy={true} 
                          className=' text-gradient btn-link cursor-pointer h-[60px] flex items-center justify-center'>
                     MY PORTFOLIO
                    </Link>
                    <motion.div 
                variants={fadeIn('up', 0.3)} 
                initial="hidden" 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.7 }} 
                className='flex text-[60px] gap-x-6 max-w-max mx-auto
                lg:mx-0'>
                  {/* <a href='#'>
                    <FaYoutube />
                  </a>   */}
                  <a href='https://github.com/ec369'>
                    <FaGithub />
                  
                  </a>  
                  {/* <a href='#'>
                    <FaDribbble />
                  </a>   */}
                  
                    </motion.div>   
              </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
};

export default About;
