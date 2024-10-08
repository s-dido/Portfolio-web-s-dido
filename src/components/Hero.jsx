import {motion} from 'framer-motion';
import { styles } from '../styles';
import{ComputersCanvas} from './canvas';

// [] ``

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto pb-2'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`} > 
        < div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-tertiary'/>
          <div className='w-1 sm:h-80 h40 bg-secondary'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}> Hi,I'm <span className='text-secondary'> Santino </span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>Strengthening the Web3 ecosystem through audits and secure practices</p>
        </div>
      </div>

      <ComputersCanvas />
      
      <div>
        &nbsp;
      </div>
          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          &nbsp;
              <a href="#about">
                <div className='w-[-35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2'>
                  <motion.div animate={{y: [0, 24, 0]}} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className='w-3 h-3 rounded-full bg-secondary mb-1'>
                    
                  </motion.div>
                </div>
              </a>
          </div>
    

    
    </section>
  )
}

export default Hero