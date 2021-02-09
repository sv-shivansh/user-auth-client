import {GET_TEST} from "../actions/types";

const initialState ={
    name: null
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const {type, payload } = action;
    switch(type){
        case GET_TEST:
            return {
                ...state,
                name: payload
            };
        default: 
            return state;
    }
}