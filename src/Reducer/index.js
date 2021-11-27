import { CHANGE_METHOD } from "../Actions/actionTypes"

const initialState={
    method:'GET',

}

export default function rootReducer(state=initialState,action){
    switch(action.type){

        case CHANGE_METHOD:{
            return{
                ...initialState,
                method:action.method
            }
        }
        default:return state
    }
}