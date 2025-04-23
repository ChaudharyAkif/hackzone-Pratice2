import { Button, Col, Form, Input, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { auth, db } from '../../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
// import { supabase } from '../../../config/supbase'

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }
const Register = () => {
  const { Title } = Typography

  const [state, setState] = useState(initialState)
  const [isProcessing, setisProcessing] = useState(false)
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const navigate = useNavigate()

  const handleSubmit = async () => {
    let { firstName, lastName, email, password, confirmPassword } = state
    firstName = firstName.trim();
    lastName = lastName.trim();
    let fullName = firstName + " " + lastName;

    if (!firstName || !lastName || !email || !password || !confirmPassword) return window.MessageAlert("Fill The All Feilds ", "error")
    if (firstName.length < 3) return window.MessageAlert("Enter Name Correctly ", "error")
    if (!window.EmailCheck(email)) return window.MessageAlert("Enter Email  Correctly ", "error")
    if (password != confirmPassword) return window.MessageAlert("Enter Email  Correctly ", "error")
    setisProcessing(true)
    const formData = { firstName, lastName, email, createAt: serverTimestamp(), createForm: "website" }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        createDocument({ ...formData, uid: user.uid })
        navigate("/")
        window.MessageAlert("Form is Successfully Submit", "success")
      })
      .catch((error) => {
        console.log(error)
        window.MessageAlert("Somthing's went wrong", "error")
      });
  }


  const createDocument = async(userdata) => {
    try {
      await setDoc(doc(db, "user", userdata.uid),userdata);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }finally{
      setisProcessing(false)
    }
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
