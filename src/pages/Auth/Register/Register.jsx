import { Button, Col, Form, Input, Row, Typography } from 'antd'
import Password from 'antd/es/input/Password'
import React, { useState } from 'react'
import { auth, db } from '../../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { supabase } from '../../../config/supbase'

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }
const Register = () => {
  const { Title } = Typography

  const [state, setState] = useState(initialState)
  const [isProcessing, setisProcessing] = useState(false)
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))


  const handleSubmit = async() => {
    let { firstName, lastName, email, password, confirmPassword } = state
    firstName = firstName.trim();
    lastName = lastName.trim();
    let fullName = firstName + " " + lastName;

    if (!firstName || !lastName || !email || !password || !confirmPassword) return window.MessageAlert("Fill The All Feilds ", "error")
    if (firstName.length < 3) return window.MessageAlert("Enter Name Correctly ", "error")
    if (!window.EmailCheck(email)) return window.MessageAlert("Enter Email  Correctly ", "error")
    if (password != confirmPassword) return window.MessageAlert("Enter Email  Correctly ", "error")
    setisPocessing(true)
    const formData = { firstName, lastName, email,createAt:serverTimestamp(), userontis:"website" }

  }



  


  return (
    <>
      <main className='auth p-3 p-lg-4 bg-primary text-light'>
        <div className="card p-lg-4">
          <Row>
            <Col span={24}>
              <Title level={2} className='text-center'>
                Register
              </Title>
            </Col>
          </Row>
          <Form layout='vertical'>
            <Row>
              <Col span={24}>
                <Form.Item label="First Name">
                  <Input type='text' placeholder='Enter First Name' name="firstName" onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Last Name">
                  <Input type='text' placeholder='Enter Last Name' name="lastName" onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="email">
                  <Input type='text' placeholder='Enter email' name="email" onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="password">
                  <Input.Password name="password" onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="confirmPassword">
                  <Input.Password name="confirmPassword" onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col span={24} className='text-center'>
                <Button type='primary' htmlType='submit' loading={isProcessing} onClick={handleSubmit}> Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </main>
    </>
  )
}

export default Register
