import {BUY_CAKE} from './type'


export function buyCake(num=1){
    return {
        type:BUY_CAKE,
        num
    }
}

