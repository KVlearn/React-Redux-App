import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getInfo} from '../action';
import {Card,CardImg,CardTitle,CardSubtitle,Badge} from 'reactstrap';
import Loader from "react-loader-spinner";
//css for react loader spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function Crew(props){
  const {getInfo}= props;
  const [url]=useState('https://api.spacexdata.com/v4/crew');
 
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
      <h3>Meet the Crew!</h3>
        {props.isLoading ? renderLoader() :  
         props.data.map(item=>{
                return(
                    <div key={item.id}  >
                    <Card className="crew">
                    <CardTitle>{item.name}</CardTitle>
                    <CardSubtitle>{item.agency}</CardSubtitle>
                    <Badge>{item.wikipedia}</Badge>
                    <CardImg src={item.image} className="crewimage" />
                    </Card>
                    </div>
                )
            }) 
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

export default connect(mapStateToProps,{getInfo})(Crew);