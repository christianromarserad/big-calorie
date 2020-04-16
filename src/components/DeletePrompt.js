import React from 'react';
import Modal from 'react-modal';

const DeletePrompt = ({ isDeletePromptOpen, closeDeletePrompt, deleteItem, itemName }) => {
    const defaultStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: 0,
            margin: 0,
            border: 'none',
            transform: 'translate(-50%, -50%)',
        }
    };

    return (
        <Modal
            isOpen={isDeletePromptOpen}
            onRequestClose={closeDeletePrompt}
            style={defaultStyles}>

            <div class="bg-white h-48 w-88 rounded-lg p-6 pb-2 flex flex-col">
                <p class="text-lg text-gray-700 font-normal">Are you sure you want to delete this?</p>
                <p class="flex-1 flex justify-center items-center text-lg font-medium text-gray-700">{itemName}</p>
                <div class="flex justify-end">
                    <button
                        class="font-bold bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg m-3 font-mono font-medium"
                        onClick={closeDeletePrompt}>
                        Close
                    </button>
                    <button
                        class="font-bold bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg m-3 font-mono font-medium"
                        onClick={() => { deleteItem(); closeDeletePrompt(); }}>
                        Delete
                    </button>
                </div>
            </div>

        </Modal>
    );
}

export default DeletePrompt;