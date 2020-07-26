import React from 'react';
import './App.css';
import { ReactComponent } from 'react';
import {Row,Col,Container} from 'reactstrap';
import imag from "./chahal1.jpg";

const Example = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="1"><img src={imag} rounded />
        </Col>
        <Col xs="11"> hi</Col>
      </Row>
    </Container>
    );

   
   
}
class App extends React.Component{
    
    constructor(props)
    {
        super(props);
    }
    render(){
        
        return (
            
            
                <Example/>
            
        );
    }

}
    

export default App;