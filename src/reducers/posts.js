import { FETCH_ALL, UPDATE, DELETE, CREATE, LIKE } from '../Constants/actionTypes'

// what is a reducer ?
// ->> Reducer is a function which takes basically 2 arguments i.e [  1) Initial Store-States, 2) action  ].
//     Based on the action type it executes the combineReducers.


// state - should always be innitialised

export default (posts = [], action ) => {
    switch (action.type) {
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post )
        case DELETE:
            return posts.filter((post) => post._id !== action.payload )
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
    
        default:
            return posts;
    }
}