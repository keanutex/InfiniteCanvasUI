import axios from 'axios';
import React, { useState } from 'react';
import { Form, Input, Button, Buttons } from './Styled-Components/styled-components';

function Login(props) {
    const [formData, setFormData] = useState({});
    const [showErr, setshowErr] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        // here is where you would login the user
        await axios.post('http://127.0.0.1:3000/account/signin',
            {
                username: formData.username,
                password: formData.password
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }
        ).then(response => {
            if (response.status === 200) {
                //props.setUser(formData.password);
                props.setUser(formData.username);
                props.setUserData({userId: response.data.userId, typeId: response.data.typeId, statusId: response.data.statusId})

            
                //console.log(response)
            }
        }).catch(error => {
            setshowErr(true);
        });
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:3000/account/register',
            formData,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(response => {
                props.setUser(formData.username);
                props.setUserData({userId: response.data.userId, typeId: response.data.typeId, statusId: response.data.statusId})
            }).catch(error => {
                setshowErr(true);

            });

    };

    return (
        
        <Form>
            <Input type="text" name="username" onChange={handleChange} placeholder="Username" />
            <Input type="password" name="password" onChange={handleChange} placeholder="Password" />
            <Input type="email" name="email" onChange={handleChange} placeholder="Email" />
            {showErr && <p>Incorrect Username or Password, please try again...</p>}
            <Buttons>
                <Button type="button" onClick={handleSubmitLogin}>Login</Button>
                <p> or </p>
                <Button type="button" onClick={handleSubmitRegister}>Register</Button>
            </Buttons>
        </Form>
    )
}

export default Login