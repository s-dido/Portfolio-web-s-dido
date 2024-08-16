import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc';


// [] ``
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full' >
      <motion.div variants={fadeIn("right","spring", 0.5 * index,0.75 )} className='w-full bg-secondary p-[1px] rounded-[20px] shadow-card'> 
        <div options={{max:45, scale: 1, speed:450}} className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='drop-shadow-lg text-tertiary text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

// [] ``

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-secondary`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-secondary`}>Overview.</h2>
    </motion.div>

      <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-tertiary text-[17px] max-w-3x1 leading-[30px]'>
      I am a Web3 developer with a strong foundation in HTML, CSS, and JavaScript, complemented by my experience with frameworks like React, Node.js, Tailwind, and Bootstrap. My true passion lies in the development and auditing of smart contracts in Solidity, using Hardhat and EVM on the Ethereum blockchain. My focus is on ensuring that every line of code is secure, efficient, and contributes to the integrity of the blockchain ecosystem. I am committed to helping projects grow securely and reliably within the Web3 space.
      </motion.p>
      <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key ={service.title} index={index}{...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper
(About, "about")