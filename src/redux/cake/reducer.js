import {BUY_CAKE} from './type'

const initialState ={
    numOfCake:20
}

export default function  cakeReducer (state=initialState,action){
    switch (action.type) {

        case BUY_CAKE: return {...state,numOfCake:state.numOfCake-action.num}

        default: return state
    }
}