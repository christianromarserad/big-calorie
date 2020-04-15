import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateTextFieldActionCreator } from '../../store/UserReducer';

function UserSideBar({ name, age, height, weight, updateTextFieldActionCreator }) {
    return (
        <div class="bg-white w-64 h-full shadow-lg py-4 px-4">
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
                    onChange={updateTextFieldActionCreator} />
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
                    onChange={updateTextFieldActionCreator} />
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
                    onChange={updateTextFieldActionCreator} />
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
                    onChange={updateTextFieldActionCreator} />
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    return { ...state.user };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateTextFieldActionCreator: updateTextFieldActionCreator
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSideBar);