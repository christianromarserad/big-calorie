import React from 'react';
import { MALE, FEMALE } from '../../utils/Constants';

function UserForm({ name, age, height, weight, gender, updateFieldActionCreator }) {
    return (
        <div>
            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="user-name">
                    Name
                </label>
                <input
                    class="font-medium appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border focus:border-gray-500"
                    id="user-name"
                    type="text"
                    value={name}
                    name="name"
                    onChange={updateFieldActionCreator} />
            </div>

            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="age">
                    Age
                </label>
                <input
                    class="font-medium appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border focus:border-gray-500"
                    id="age"
                    type="number"
                    value={age}
                    name="age"
                    onChange={updateFieldActionCreator} />
            </div>

            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="height">
                    Height
                </label>
                <input
                    class="font-medium appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border focus:border-gray-500"
                    id="height"
                    type="number"
                    placeholder="cm"
                    value={height}
                    name="height"
                    onChange={updateFieldActionCreator} />
            </div>

            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
                    Weight
                </label>
                <input
                    class="font-medium font-medium appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border focus:border-gray-500"
                    id="weight"
                    type="number"
                    placeholder="kg"
                    value={weight}
                    name="weight"
                    onChange={updateFieldActionCreator} />
            </div>

            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Gender
                </label>
                <div class="mt-2">
                    <label class="inline-flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value={MALE}
                            onChange={updateFieldActionCreator}
                            checked={gender === MALE} />
                        <span class="text-gray-700 ml-2 uppercase tracking-wide font-bold text-xs">Male</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                        <input
                            type="radio"
                            name="gender"
                            value={FEMALE}
                            onChange={updateFieldActionCreator}
                            checked={gender === FEMALE} />
                        <span class="text-gray-700 ml-2 uppercase tracking-wide font-bold text-xs">Female</span>
                    </label>
                </div>
            </div>
        </div >
    );
}

export default UserForm;



