import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import * as ActionTypes from './ActionTypes'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const initialState={
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
}
export const Dishes=(state={
    isLoading: true,
    errmess: null,
    dishes: []
}, action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errmess:null, dishes:action.payload};


        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errmess:null, dishes:[]};
        case ActionTypes.DiSHES_FAILED:
            return {...state, isLoading: false, errmess:action.payload, dishes:[]};

        
        default:
            return state;
    }
}
export const Comments=(state=COMMENTS, action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_COMMENT:
            var comment=action.payload;
            comment.id=state.length;
            comment.date=new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}
export const Leaders=(state=LEADERS, action) => {
    switch(action.type)
    {
        default:
            return state;
    }
}
export const Promotions=(state=PROMOTIONS, action) => {
    switch(action.type)
    {
        default:
            return state;
    }
}
export const ConfigureStore=()=>{
    const store=createStore(combineReducers({
        dishes: Dishes,
        comments: Comments,
        leaders: Leaders,
        promotions: Promotions
    }),
    applyMiddleware(thunk, logger)
    );
    return store;
}