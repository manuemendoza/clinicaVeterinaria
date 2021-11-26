import {createStore} from "redux";

const startState = {
    token: null
};

const reduce = (initialState=startState, action) => {
    switch (action.type) {
        case "ADD_TOKEN":
            return{
                token:action.payload
            }
        default:
            return initialState;
    }
};

export default createStore(reduce)