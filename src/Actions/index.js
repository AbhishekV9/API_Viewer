import { CHANGE_METHOD, EMPTY_BODY, POST_BODY } from "./actionTypes";


export function changeMethod(method){
    return{
        type:CHANGE_METHOD,
        method
    }
}

export function addPostBody(key,value){
    return{
        type:POST_BODY,
        key,
        value
    }
}

export function emptyBody(){
    return{
        type:EMPTY_BODY
    }
}

