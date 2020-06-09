import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {createStore} from 'redux';

export const initialState={
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
}
export const Reducer=(state=initialState,action)=>{
    return state;
}
export const ConfigureStore=()=>{
    const store=createStore(Reducer,initialState);
    return store;
}