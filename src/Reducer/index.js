import { CHANGE_METHOD, EMPTY_BODY, POST_BODY } from "../Actions/actionTypes"

const initialState={
    method:'GET',
    postState:{

    }

}

export default function rootReducer(state=initialState,action){
    switch(action.type){

        case CHANGE_METHOD:{
            return{
                ...state,
                method:action.method
            }
        }

        case POST_BODY:{
            return{
                ...state,
                postState:{...state.postState,[action.key]:action.value}
            }
        }

        case EMPTY_BODY:{
            return{
                ...state,
                postState:{}
            }

        }
        
        default:return state
    }
}