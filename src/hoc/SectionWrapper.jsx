import React from "react";
import { styles } from "../styles";
import { motion } from 'framer-motion';

import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => 
    function HOC(){
        return(
            <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" className={`${styles.padding} max-w-7x1 mx-auto relative z-0`} >

                <span className="hash-span" id={idName}>
                    &nbsp; 
                </span>


                <Component viewPort={{once: true, amount: 0.25}} />
            </motion.div>
        )
    }

export default SectionWrapper