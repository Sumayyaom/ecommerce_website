import { Fragment, useEffect, useState } from "react";
import { Container, Row,Col, } from "react-bootstrap";
import HomeBanner from "../components/HomeBanner";
import './Home.css';
import { SingleProduct } from "../components/SingleProduct";

function Home(){

  const [products,setproducts] = useState([]);

  useEffect(()=>{

      fetch('./products.json')
      .then((data)=> data.json())
      .then((res)=> setproducts((res.products)));
  },[]);
    return(
        <> 
               <HomeBanner />
             <Container> 
              <Row>
              <Col className="my=3">
              <h2>
                Latest Products
              </h2>
              </Col>
              </Row>
             <Row>
                  {products.map((product)=>(
                    <SingleProduct product={product} />  //props
                  ))}
             </Row>
           </Container> 
        </>   

    );
}    
export default Home;