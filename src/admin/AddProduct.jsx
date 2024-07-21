import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddProduct = ()=> {
    
    const [validated, setValidated] = useState(false);
    const [product, setProduct] = useState({
        productname:'',
        category:'',
        price:'',
        photo:''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }else{
        console.log("Form submitted",product)
      }
      setValidated(true);
      
};

const onChangeHandler = (e)=>{
    const {name,value} = e.target;
    if(name === 'photo'){
        const photo = e.target.files[0];
        setProduct({...product,[name]:photo});
    }
    else{
        setProduct({...product,[name]:value});
    }
    
  }

    return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h2>
                        Add Product
                    </h2>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={4} className='mb-3 shadow p-4'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group controlId="validationCustom01" className='position-relative'>
          <Form.Label>Product name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product name"
            name='productname'
            onChange={onChangeHandler}
          />
          <Form.Control.Feedback type='invalid' tooltip>Please enter the product name</Form.Control.Feedback>
          <Form.Control.Feedback tooltip>Looks good!!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Category</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product Category"
            name='category'    
            onChange={onChangeHandler}      
          />
          <Form.Control.Feedback type='invalid'>
            Please enter the category
        </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              aria-describedby="inputGroupPrepend"
              required
              name='price'
              onChange={onChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a product price
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Photo</Form.Label>
            <Form.Control
              type="file"
              name='photo'
              onChange={onChangeHandler}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please upload a photo
            </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className='mt-3'>Add Product</Button>
      </Row>

      </Form>
                </Col>
            </Row>
    </Container>
    </div>
  )
}
export default AddProduct
