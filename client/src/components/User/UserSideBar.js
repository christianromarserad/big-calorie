import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFieldActionCreator } from '../../store/UserReducer';
import appLogo from '../../images/bigcalorie.png';
import nutritionixLogo from '../../images/nutritionix.png';
import UserForm from './UserForm';
import UserComputation from './UserComputation';

function UserSideBar({ name, age, height, weight, gender, selectedDay, updateFieldActionCreator, days }) {
    return (
        <div class="bg-white h-full shadow-lg py-4 px-4 flex flex-col">
            <img src={appLogo} class="object-contain h-12 w-full" />
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
            <img src={nutritionixLogo} class="object-contain h-10 w-full" />
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
        updateFieldActionCreator
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSideBar);