import * as Action from './constant'

let initialState = {
    data: []
}
const blog = (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_DATA:
            state.data = action.data
            return {...state}
        default:
            return {...state}
    }
}
export default blog;
