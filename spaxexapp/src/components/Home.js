import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getInfo} from '../action';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Badge} from 'reactstrap';
import Loader from "react-loader-spinner";

//css for react loader spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
 

function Home(props){

  const {getInfo}= props;
  const [url]=useState('https://api.spacexdata.com/v4/company');
 
    useEffect(()=>{
      getInfo(url);
  },[getInfo,url]);

     const renderLoader = () => {
        return (
          <>
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
        {props.isLoading ? renderLoader() :
        <>
        <h4>Welcome!</h4>
        <Card className="mainInfo" >
        <CardBody>
          <CardTitle tag="h5">{props.data.name}</CardTitle>
            {/* <CardSubtitle tag="h6"> {props.data.headquarters.address} | 
            {props.data.headquarters.city} | {props.data.headquarters.state} </CardSubtitle><br/> */}
          <CardSubtitle>Founder: {props.data.founder}</CardSubtitle>  
          <CardSubtitle>Founded: {props.data.founded}</CardSubtitle>
          <CardSubtitle>CEO: {props.data.ceo}</CardSubtitle> 
          <CardSubtitle>COO: {props.data.coo}</CardSubtitle> 
          <br/>
          <CardText>{props.data.summary}</CardText>
          <Badge href="props.data.links.website" color="info">Website</Badge>
        </CardBody>
       </Card> 
       </>
      }
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

export default connect(mapStateToProps,{getInfo})(Home);