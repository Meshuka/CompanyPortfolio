import React from 'react';
import { useState } from 'react';
import {message, Form, Input, Button, Checkbox} from 'antd';
import emailjs from 'emailjs-com'; 

const {TextArea} = Input;

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;

function SiteContact() {
    const [formParams, setFormParams ] = useState({
        fullname: '',
        email: '',
        telephone: '',
        subject: '',
        message: ''
     })
    const handleChange=(e) =>{
        setFormParams({...formParams, [e.target.name]: e.target.value})
    } 
    const success =()=>{
        message.success('Mail sent successfully!')
    }
    const failure =()=>{
        message.error('Mail not sent. Please try again.')
    }
    const sendEmail = (e)=>{
        // e.preventDefault();
        emailjs.send(serviceId,templateId,formParams,userId).then(function(response){
            console.log('SUCCESS!', response.status, response.text);
            setFormParams({
                fullname: '',
                email: '',
                telephone: '',
                subject: '',
                message: ''
            })
            success();
         }, function(error) {
            console.log('FAILED...', error);
            failure();
         });
        };
    return (
        <div id='contact' className="block contactBlock">
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Contact Us</h2>
                    <p>You can contact us here!</p>
                </div>
                <Form
                    id='myForm'
                    name="contact-form"
                    className="contact-form"
                    initialValues={{ remember: true }}
                    onFinish={sendEmail}>
                <Form.Item
                rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                <Input 
                name="fullname"
                type='text' 
                placeholder="Full Name" 
                value={formParams.fullname}
                onChange={handleChange}
                />
                </Form.Item>
                <Form.Item
                rules={[{ required: true, message: 'Please input your email!' }]}
                >
                <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formParams.email}
                onChange={handleChange}
                />
                </Form.Item>
                <Form.Item
                >
                <Input
                name="telephone"
                type="number"
                placeholder="Telephone"
                value={formParams.telephone}
                onChange={handleChange}
                />
                </Form.Item>
                <Form.Item
                >
                <Input
                name="subject"
                type="textarea"
                placeholder="Subject"
                value={formParams.subject}
                onChange={handleChange}
                />
                </Form.Item>
                <Form.Item
                
                >
                <TextArea
                name="message"
                rows={4}
                placeholder="Message"
                value={formParams.message}
                onChange={handleChange}
                />
                </Form.Item>
                <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>I agree with all the terms and conditions</Checkbox>
                </Form.Item>
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
                </Button>
                </Form.Item>
                </Form>
            </div>
            
        </div>
    )
}

export default SiteContact;
