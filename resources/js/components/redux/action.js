import axios from "axios";
import * as ActionType from './constant'

export const getListBlog = () => {
    return async dispatch => {
        try {
            const data = await axios.get('/api/v1/posts').then(res => res.data);
            dispatch({
                type: ActionType.GET_DATA,
                data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
export const deleteBlog = (id) => {
    return async dispatch => {
        try {
            await axios.delete(`/api/v1/posts/${id}`).then(res => dispatch({
                type: ActionType.DELETE_DATA,
                res
            }))
        } catch (err) {
            console.log(err)
        }
    }
}
