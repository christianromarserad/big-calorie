import React, { useState } from 'react';
import { BrowserView, CustomView, isMobile, isTablet } from 'react-device-detect';
import { motion } from 'framer-motion';
import Prompt from './Prompt';

const NavBar = ({ navOptionsArray }) => {
    const [isNavPromptOpen, setIsNavPromptOpen] = useState(false);

    return (
        <>
            <BrowserView renderWithFragment>
                <div class="w-full overflow-hidden flex justify-center p-2">
                    {
                        navOptionsArray.map(({ name, isSelected, onClick }, index) => {
                            return (
                                isSelected ?
                                    <motion.button
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        key={name + "selected"}
                                        class="text-xs uppercase font-bold bg-teal-700 hover:bg-teal-700 text-white py-2 px-4 rounded-lg m-2"
                                        onClick={onClick}>
                                        {name}
                                    </motion.button> :
                                    <motion.button
                                        class="text-xs uppercase font-bold text-gray-600 hover:bg-teal-300 py-2 px-4 rounded-lg m-2"
                                        onClick={onClick}
                                        whileHover={{ scale: 1.06 }}>
                                        {name}
                                    </motion.button>
                            )
                        })
                    }
                </div>
            </BrowserView>


            <CustomView renderWithFragment condition={isMobile || isTablet}>
                <div class="w-full overflow-hidden flex p-2 bg-teal-500 shadow-lg sticky top-0">
                    <button
                        class="text-white py-2 px-2 rounded-lg"
                        onClick={setIsNavPromptOpen.bind(this, true)}>
                        <svg
                            class="h-5 fill-current object-contain"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <Prompt
                    hStart
                    vStart
                    isPromptOpen={isNavPromptOpen}
                    closePrompt={setIsNavPromptOpen.bind(this, false)}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 235 }}
                        exit={{ width: 0 }}
                        class="bg-white h-full w-64 flex flex-col shadow-xl item-center">
                        {
                            navOptionsArray.map(({ name, isSelected, onClick }, index) => {
                                return (
                                    isSelected ?
                                        <motion.button
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            key={name + "selected"}
                                            class="text-xs uppercase font-bold bg-teal-700 hover:bg-teal-700 text-white py-2 px-4 rounded-lg m-2 text-left"
                                            onClick={() => { setIsNavPromptOpen(false); onClick(); }}>
                                            {name}
                                        </motion.button> :
                                        <motion.button
                                            whileHover={{ scale: 1.06 }}
                                            class="text-xs uppercase font-bold text-gray-600 hover:bg-teal-300 py-2 px-4 rounded-lg m-2 text-left"
                                            onClick={() => { setIsNavPromptOpen(false); onClick(); }}>
                                            {name}
                                        </motion.button>
                                )
                            })
                        }
                    </motion.div>
                </Prompt>
            </CustomView>
        </>
    );
}

export default NavBar;