import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Prompt = ({ isPromptOpen, children, styles, closePrompt }) => {
    return (
        <AnimatePresence>
            {
                isPromptOpen &&
                <motion.div
                    class="absolute top-0 right-0 h-full w-full bg-modal flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(event) => (event.target === event.currentTarget ? closePrompt() : null)}>

                    <motion.div
                        class={styles}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}>

                        {children}

                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Prompt;