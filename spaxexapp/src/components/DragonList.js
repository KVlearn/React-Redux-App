import React from 'react';
import {connect} from 'react-redux';
import {getInfo} from '../action';
import {Card,CardImg,CardTitle,CardSubtitle,CardText} from 'reactstrap';
 
function DragonList(props){
 console.log('props in DL=',props)
return(
    <div>
        <h4> Dragon Info</h4>  
        {props.data.map(item=>{
          return(
            <div key={item.id} >
              <Card className="dragon">
                <CardTitle><h3>{item.name}</h3></CardTitle>
                <CardSubtitle>{item.type}</CardSubtitle>
                <CardSubtitle>{item.active}</CardSubtitle>
                <CardSubtitle>Orbit Duration in Years:{item.orbit_duration_yr}</CardSubtitle>
                <CardSubtitle>Mass:{item.dry_mass_kg}</CardSubtitle>
                <CardSubtitle>First Flight:{item.first_flight}</CardSubtitle>
                <CardText>{item.description}</CardText>
                <CardTitle>HeatShield:</CardTitle>
                <CardSubtitle>Material: {item.heat_shield.material}</CardSubtitle>
                <CardSubtitle>Size(meters): {item.heat_shield.size_meters}</CardSubtitle>
                <CardSubtitle>Temp(degree): {item.heat_shield.temp_degrees}</CardSubtitle>
                <CardSubtitle>Dev Partner: {item.heat_shield.dev_partner}</CardSubtitle>
                  {item.flickr_images.map(item =>  <CardImg src={item}/>)}
              </Card>
            </div>
          )
        })}
    </div>
)
}
const mapStateToProps=(state)=>{
return{
    data:state.data,
}
}

export default connect(mapStateToProps,{getInfo})(DragonList);