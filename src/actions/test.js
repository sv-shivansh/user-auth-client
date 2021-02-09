import axios from 'axios'
import { 
    GET_TEST,
    ERROR_TEST 
} from './types'

//Get Test
export const getTest = () => async dispatch =>{
    console.log("Get test");
    try {
        const res = await axios.get('/api/test');

        dispatch({
            type: GET_TEST,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_TEST,
            payload: { msg: 'TEST Failed', status: 500}
        });
    }
}