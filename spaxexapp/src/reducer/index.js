import {GET_INFO_START,
GET_INFO_SUCCESS,
GET_INFO_FAILURE} from  '../action';

const initialState={
    data:[],
    isLoading:false,
    error:'',
}

export const reducer = (state=initialState,action)=>{
switch(action.type){
    case GET_INFO_START:
        return {
            ...state,
            isLoading: true,
        }
    case GET_INFO_SUCCESS:
        return{
            ...state,
            isLoading:false,
            data:action.payload,
            error:'',
        }
    case GET_INFO_FAILURE:
        return{
            ...state,
            isLoading:false,
            error:action.payload,
        }
    
    default:
        return state;
}
}