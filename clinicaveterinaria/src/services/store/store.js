import {createStore} from "redux";

const startState = {
    token: null
};

const reduce = (initialState=startState , action) => {
    switch (action.type) {
        case "ADD_TOKEN":
            return {
                    ...initialState,
                    token: action.payload // AQUI NO ES UN CONCAT
                }
        case "DELETE_TOKE":
            return{
                ...initialState,
                token: null
            }
        default:
            return initialState;
    }
};

export default createStore(reduce)