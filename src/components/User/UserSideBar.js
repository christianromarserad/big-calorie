import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFieldActionCreator } from '../../store/UserReducer';
import UserForm from './UserForm';
import UserComputation from './UserComputation';

function UserSideBar({ name, age, height, weight, gender, selectedDay, updateFieldActionCreator, days }) {
    return (
        <div class="bg-white w-64 h-full shadow-lg py-4 px-4 flex flex-col">
            <UserForm
                name={name}
                age={age}
                height={height}
                weight={weight}
                gender={gender}
                updateFieldActionCreator={updateFieldActionCreator} />

            <div class="flex-1">
                <UserComputation
                    age={age}
                    height={height}
                    weight={weight}
                    gender={gender}
                    selectedDay={selectedDay}
                    days={days} />
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        ...state.user,
        selectedDay: state.mealPlan.selectedDay,
        days: state.mealPlan.days
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateFieldActionCreator: updateFieldActionCreator
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSideBar);