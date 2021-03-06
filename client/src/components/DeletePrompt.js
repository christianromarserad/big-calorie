import React from 'react';
import Prompt from './Prompt';
import { motion } from 'framer-motion';

const DeletePrompt = ({ isDeletePromptOpen, closeDeletePrompt, deleteItem, itemName }) => {

    return (
        <Prompt
            hCenter
            vCenter
            isPromptOpen={isDeletePromptOpen}
            closePrompt={closeDeletePrompt}>
            <motion.div
                class="bg-white h-48 w-88 flex flex-col rounded-xl shadow-xl item-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}>
                <p class="text-lg text-gray-700 font-semibold flex items-center justify-center p-2 bg-teal-300 shadow-sm rounded-t-xl">
                    <svg
                        class="h-10 fill-current text-red-500"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z" />
                    </svg>
                    <span class="text-sm ml-4">Are you sure you want to delete this?</span>
                </p >
                <p class="flex-1 flex justify-center items-center text-sm font-bold text-gray-700">{itemName}</p>
                <div class="flex justify-end p-2 border-t">
                    <button
                        class="text-xs uppercase font-bold bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg mr-2"
                        onClick={closeDeletePrompt}>
                        Close
                        </button>
                    <button
                        class="text-xs uppercase font-bold bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                        onClick={() => { deleteItem(); closeDeletePrompt(); }}>
                        Delete
                        </button>
                </div>
            </motion.div>
        </Prompt>
    );
}

export default DeletePrompt;