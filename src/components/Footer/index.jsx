import { Typography } from 'antd'
import React from 'react'

const Footer = () => {

    const { Paragraph } = Typography
    return (
        <footer className='bg-primary  text-center'>
            <div className="container">
                    <Paragraph className='py-2 mb-0 text-white'>
                        &copy; {new Date().getFullYear()} All Right Reserver
                    </Paragraph>
            </div>
        </footer>
    )
}

export default Footer
