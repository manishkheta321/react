import React from 'react';
import './App.css';
import { ReactComponent } from 'react';
import imag from "./chahal1.jpg";
import {Image,Row,Col,Container} from 'react-bootstrap';

const Example = (props) => {
  return (
    <Container>
      <hr/>
      <Row className="bodys">
        <Col xs="2"><Image src={imag} fluid roundedCircle />
        </Col>
        <Col xs="9">
               <span><b>The Practical Dev  </b><span className = "disab">@ThePracticalDev . Sep 10</span></span>
               <div>Learning React? Start Small.</div>
               <div>{"{ author :"} <span className="bluecolor"> @decide </span>{"}"} </div>
               <br/>
               <div className="rounded-box">
                 <div className="yellow-box" fluid>
                  
                  <Row>
                    <Col xs="2"> 
                    <Image src={imag} fluid rounded className="image1" />
                    </Col>
                  </Row>
                 
                      <div className="text-style" fluid>
                       Hello World!
                     </div>
                     <Row>
                       <Col xs="8"> </Col>
                       <Col >
                            
                            <div className="rectangle-box" >
                            <Row>
                              <Col xs="9" className="names">
                              <div className="textcolor">MANISH</div>
                              
                              </Col>
                              <Col className="midd" >
                              <Image src={imag} className="newimage" />
                              </Col>
                            </Row>
                            </div>
                       </Col>
                     </Row>
                   
                   
                  </div>
                  <Row>
                    <Col xs="10">
                 <div className="textbox">
                   <b>Learning React? Start Small.</b>
                   <div>Can't pry yourself away from the tuitorials? The cure is to make tiny little experiment apps.</div>
                  <div className="newtext" >dev.to </div>
                 </div>
                 </Col>
                 </Row>
               </div>
               
               <div>
                 ..
               </div>
        </Col>
      </Row>
      <hr/>
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