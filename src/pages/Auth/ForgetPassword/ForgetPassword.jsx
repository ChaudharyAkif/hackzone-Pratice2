
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { auth } from '../../../config/firebase'
import {  sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom'

const initialState = { email: "" }
const ForgetPassword = () => {
    const { Title } = Typography

    const [state, setState] = useState(initialState)
    const [isProcessing, setisProcessing] = useState(false)
    const navigate = useNavigate()
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))


    const handleSubmit = () => {
        let { email } = state

        if (!email) return window.MessageAlert("Enter Your Email  ", "error")

        const formData = { email}
        setisProcessing(true)
        sendPasswordResetEmail(auth, email, password)
            .then((userCredential) => {
                window.MessageAlert("ForgetPassword Succesffuly", "success")
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
                if (error === "auth/invalid/email") return navigate("/auth/register");
                window.MessageAlert("Somethings Want's Wrongs ", "error");
            }).finally(() => {
                setisProcessing(false)
            })


    }


    return (
        <>
            <main className='auth p-3 p-lg-4 bg-primary text-light h-100'>
                <div className="card p-lg-4">
                    <Row>
                        <Col span={24}>
                            <Title level={2} className='text-center'>
                                ForgetPassword
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

export default ForgetPassword
