import React, { useEffect,useState } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const {id} = useParams();
    const [products,setproducts] = useState([]);
    const [product,setproduct]=useState(null);
    const [productFetched,setProductFetched] = useState(false);

    const getproducts=()=>{
        fetch('./products.json')
        .then((data)=> data.json())
        .then((res)=> setproducts((res.products)));
        setProductFetched(true);

    }

    useEffect(()=>{

        if(!productFetched){
            getproducts();
        }

        if(products.length>0){
            const res=  products.find((product) => product.id===Number(id))
              setproduct(res);
          }

    },[id,products,productFetched]);
    
  

    console.log(product);

    return (
        <Container>
            {product &&(
                <Row className='my-4'>
                <Col md={4}>
                    <img src={product.image} alt={product.name} className='w-100'/>
                </Col>
                <Col md={8}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h5>
                                Name: {product.name}
                            </h5>
                        </ListGroup.Item>
                        <ListGroup.Item><h5>Brand: {product.brand}</h5></ListGroup.Item>
                        <ListGroup.Item> <h5>
                                Price: {product.price}
                            </h5></ListGroup.Item>
                        <ListGroup.Item><h5>In Stock: {product.stock}</h5></ListGroup.Item>
                        <ListGroup.Item> <h5>
                                Description: {product.description}
                            </h5></ListGroup.Item>
                        <ListGroup.Item><h5>Category: {product.category}</h5></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            )}
            
        </Container>
    )
}

export default ProductDetails