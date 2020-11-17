import axios from 'axios';

export const GET_INFO_START = 'GET_INFO_START';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAILURE = 'GET_INFO_FAILURE';

export const getInfo=(url)=>(dispatch)=>{

 dispatch({type:GET_INFO_START});

 axios.get(url)
      .then(res=>{
        dispatch({type:GET_INFO_SUCCESS,payload:res.data});
      })
      .catch(err=>{
          console.log(err.message);
          dispatch({type:GET_INFO_FAILURE,payload:err.message})
      })

 

}

