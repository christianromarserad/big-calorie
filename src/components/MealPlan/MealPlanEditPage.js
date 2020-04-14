import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {
    updateMealNameActionCreator,
    addFoodActionCreator
} from '../../store/MealPlanReducer';

function MealPlanEditPage(props) {
    let { index, day } = props.match.params;
    let [searchKeyWord, setSearchKeyWord] = useState('');
    let [timer, setTimer] = useState(null);
    let [searchItems, setSearchItems] = useState([]);

    const searchOnFocusOut = () => {
        setSearchItems([]);
        setSearchKeyWord('');
    }

    const searchOnChange = (event) => {
        setSearchKeyWord(event.target.value);
        clearTimeout(timer);
        setTimer(setTimeout(getSearchItems.bind(this, event.target.value), 500));
    }

    const getSearchItems = (searchKeyWord) => {
        axios.get('/v2/search/instant',
            {
                params: {
                    query: searchKeyWord
                }
            }
        ).then((res) => {
            setSearchItems(res.data.common);
        });
    }



    return (
        <div class="m-10 relative">
            <Link to={"/" + props.selectedDay + "/" + props.index}>
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded-lg">
                    back
                </button>
            </Link>
            <input
                class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                value={props.mealName}
                onChange={props.updateMealNameActionCreator.bind(this, day, index)} />

            <input
                class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                value={searchKeyWord}
                onBlur={searchOnFocusOut}
                onChange={searchOnChange} />

            {
                searchItems.length != 0 ?
                    <div class="bg-white rounded-b-md absolute w-full shadow-lg h-64 overflow-y-scroll">
                        {
                            searchItems.map(({ food_name, serving_qty, serving_unit, photo }) => (
                                <button
                                    class="block w-full hover:bg-gray-200 font-bold py-2 px-4 border flex items-center"
                                    onMouseDown={props.addFoodActionCreator.bind(this, day, index, food_name)}>

                                    <img class="object-contain h-10 w-20" src={photo.thumb} />
                                    <p class="text-gray-600 flex-1 text-right">{food_name}</p>
                                    <p class="text-gray-600 flex-1 text-right">{serving_qty} {serving_unit}</p>
                                </button>
                            ))
                        }
                    </div> : null
            }
            <div>
                <table class="table-auto overflow-hidden w-full">
                    <tbody>
                        {
                            props.foods.map(({ foodName, calorie, carb, protein, fat }) => {
                                return (
                                    <tr>
                                        <td class="px-4 py-2">{foodName}</td>
                                        <td class="px-4 py-2 text-xs">carb: {carb}</td>
                                        <td class="px-4 py-2 text-xs">protein: {protein}</td>
                                        <td class="px-4 py-2 text-xs">fat: {fat}</td>
                                        <td class="px-4 py-2 text-xs">calorie: {calorie}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}

function mapStateToProps(state, ownProps) {
    let { index, day } = ownProps.match.params;
    return {
        mealName: state.mealPlan.days[day][index].mealName,
        foods: state.mealPlan.days[day][index].foods
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateMealNameActionCreator: updateMealNameActionCreator,
        addFoodActionCreator: addFoodActionCreator
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MealPlanEditPage);