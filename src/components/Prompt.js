import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Prompt = ({ isPromptOpen, children, closePrompt, vStart, vCenter, vEnd, hStart, hCenter, hEnd, padding }) => {

    const getStyles = () => {
        let styles = "absolute top-0 right-0 h-full w-full bg-modal flex";

        if (vStart) {
            styles += " items-start";
        }
        else if (vCenter) {
            styles += " items-center";
        }
        else if (vEnd) {
            styles += " items-end";
        }

        if (hStart) {
            styles += " justify-start";
        }
        else if (hCenter) {
            styles += " justify-center";
        }
        else if (hEnd) {
            styles += " justify-end";
        }

        if (padding != undefined) {
            styles += " p-" + padding;
        }

        return styles;
    }

    return (
        <AnimatePresence>
            {
                isPromptOpen &&
                <motion.div
                    class={getStyles()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(event) => (event.target === event.currentTarget ? closePrompt() : null)}>

                    {children}

                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Prompt;