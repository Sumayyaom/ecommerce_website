import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const SingleProduct = ({product}) => {
  return (
    <Col md={4} className="mb-3">
    <Card>
   <Card.Img variant="top" src={product.image} />
     <Card.Body>
       <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         {product.price}<br></br>
         {product.discription}
       </Card.Text>
        <Button variant="primary" as={Link} to={`/${product.id}`}>More Info</Button>
      </Card.Body>
     </Card>
   </Col>
  )
}