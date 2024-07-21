import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';


const  SignUp = ()=> {
    const { Formik } = formik;

    const schema = yup.object().shape({
      fullName: yup.string().required("Please enter fullname").min(5,"Fullname should be greater than 5 charactore"),
      email: yup.string().required().email(),
      password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[a-zA-Z\W_]{1,8}$/,"Password should contain minimum 8 characters, minimum 1 small letter and one capital letter"),
      confirmPassword: yup.string().required().oneOf([yup.ref('password'),null], "Must match with password"),
    });

  return (
    <Container>
            <Row>
                <Col>
                    <h2>
                        Sign Up
                    </h2>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={4} className='mb-3 shadow p-4'>
                <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group  controlId="validationFormik01" className='position-relative'>
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={values.fullName}
                onChange={handleChange}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type='invalid' tooltip>
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group  controlId="validationFormik02" className='position-relative'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type='invalid' tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group controlId="validationFormikUsername" className='position-relative'>
              <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="validationFormik03" className='position-relative'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please Confirm your Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Formik>
                </Col>
            </Row>
    </Container>
  )
}

export default SignUp;