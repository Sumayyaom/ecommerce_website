import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Contact.css";

function Contact() {
  const [contactFormData, setContactFormData] = useState({
    fullname:'',
    email:'',
    phone:'',
    message:''
  }); //state - immutable
   
  const [errors, setErrors] = useState({
    fullname:'',
    email:'',
    phone:'',
    message:''
  });

  const validateForm = ()=>{
    let valid = true;
    const newErrors = {
      fullname: '',
      email:'',
      phone:'',
      message:''
    }
    if(!contactFormData.fullname.trim()){
      newErrors.fullname = "Fullname is required";
      valid = false;
    }else if(contactFormData.fullname.length < 3){
      newErrors.fullname = "Fullname should contain minimum 3 characters";
    }
    if(!contactFormData.email.trim())
    {
      newErrors.fullname = "Email is required";
      valid = false;
    }else if(!/\S+@\S+\.\S+/.test(contactFormData.email)){
      newErrors.email="Please enter a valid email";
      valid = false;
    }
    if(!contactFormData.phone.trim()){
      newErrors.phone = "Please enter a phone number";
      valid = false;
    }else if(!/^\d{10}$/.test(contactFormData.phone)){
      newErrors.phone="Phone number must be 10 digits";
      valid = false;
    }

    if(!contactFormData.message.trim())
      {
        newErrors.message = "Please enter any message";
        valid = false;
    }
    setErrors(newErrors);
    return valid;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(validateForm()){
      console.log("Form is submitted!", contactFormData);
    }
  }
  
  const onChangeHandler = (e)=>{
    const {name,value} = e.target;
    setContactFormData({...contactFormData,[name]:value});
  }

  console.log("contactFormData================>",contactFormData);

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <div className='shadow bg-white p-4 m-4'>
            <form className='form-container my-4' onSubmit={handleSubmit}>
              <input type="text" name='fullname' placeholder='Please enter fullname' onChange={onChangeHandler}/>
              <span className='error'>{errors?.fullname ?? ''}</span>
              <input type="email" name='email' placeholder='Please enter email' onChange={onChangeHandler}/>
              {errors?.email ?? ''}
              <input type="number" name='phone' placeholder='Please enter phone' onChange={onChangeHandler}/>
              {errors?.phone ?? ''}
              <textarea type="text" name='message' rows="5" placeholder='Please enter message' onChange={onChangeHandler}>
              </textarea>
              <button>Send message</button>
            </form>  
          </div> 
        </Col>
      </Row>
    </Container>
  )
}

export default Contact