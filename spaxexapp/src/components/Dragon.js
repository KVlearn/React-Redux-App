import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getInfo} from '../action';
import DragonList from '../components/DragonList';
import Loader from "react-loader-spinner";
//css for react loader spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


function Dragon(props){
  const [url]=useState('https://api.spacexdata.com/v4/dragons');
 const {getInfo} = props;
  useEffect(()=>{
    getInfo(url);
},[getInfo,url]);
    
    const renderLoader = () => {
        return (
          <><h2>Please wait...</h2>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={15}
              width={115}
              timeout={30000} //3 secs
            />
          </>
        );
      };

return(
    <div>
         {props.isLoading ?  renderLoader() : <DragonList/>}
         {/* <h2>{console.log(props.data[0])}</h2> */}
    </div>
)
}
const mapStateToProps=(state)=>{
return{
    data:state.data,
    isLoading:state.isLoading,
    error:state.error,
}
}

export default connect(mapStateToProps,{getInfo})(Dragon);