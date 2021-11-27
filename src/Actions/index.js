import { CHANGE_METHOD } from "./actionTypes";


export function changeMethod(method){
    return{
        type:CHANGE_METHOD,
        method
    }
}