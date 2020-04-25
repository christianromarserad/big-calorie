import React from 'react';
import { motion } from 'framer-motion';


const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const items = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 0,
        transition: {
            loop: Infinity,
            duration: 1.2
        }
    }
}


function LoadingAnimation() {
    return (
        <motion.div
            class="flex p-2"
            variants={container}
            initial="hidden"
            animate="visible">

            <motion.div
                class="bg-teal-700 m-1 rounded-full w-2 h-2"
                variants={items}>
            </motion.div>

            <motion.div
                class="bg-teal-700 m-1 rounded-full w-2 h-2"
                variants={items}>
            </motion.div>

            <motion.div
                class="bg-teal-700 m-1 rounded-full w-2 h-2"
                variants={items}>
            </motion.div>

            <motion.div
                class="bg-teal-700 m-1 rounded-full w-2 h-2"
                variants={items}>
            </motion.div>
        </motion.div>
    );
}

export default LoadingAnimation;