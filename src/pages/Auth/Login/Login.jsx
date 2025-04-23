
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { auth } from '../../../config/firebase'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom'

const initialState = { email: "", password: "" }
const Login = () => {
    const { Title } = Typography

    const [state, setState] = useState(initialState)
    const [isProcessing, setisProcessing] = useState(false)
    const navigate = useNavigate()
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))


    const handleSubmit = () => {
        let { email, password } = state

        if (!email || !password) return window.MessageAlert("Fill The All Feilds ", "error")

        const formData = { email, password }
        setisProcessing(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                window.MessageAlert("Login Succesffuly", "success")
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
                if(error ==="/authinvalid/email") return navigate("/auth/register")
                // if (error === "auth/invalid/email") return navigate("/auth/register");
                window.MessageAlert("Somethings Want's Wrongs ", "error");
            })

    }


    return (
        <>
            <main className='auth p-3 p-lg-4 bg-primary text-light h-100'>
                <div className="card p-lg-4">
                    <Row>
                        <Col span={24}>
                            <Title level={2} className='text-center'>
                                Login
                            </Title>
                        </Col>
                    </Row>
                    <Form layout='vertical'>
                        <Row>

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
                            <Col span={24} className='text-end py-2'>
                                <Button type='link' onClick={()=>navigate("/auth/forgetPassword")}> Forget Password</Button>
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

export default Login
