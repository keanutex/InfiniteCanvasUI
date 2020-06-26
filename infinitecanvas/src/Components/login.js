import React, {useState} from 'react';
import {Form, Input, Button, Buttons} from './Styled-Components/styled-components';

function Login(props) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        // here is where you would login the user
        console.log(formData);
        props.setUser(formData.username);
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        // here is where you would register the user
        console.log(formData);
        props.setUser(formData.username);
    };

    return (
        <Form>
            <Input type="text" name="username" onChange={handleChange} placeholder="Username"/>
            <Input type="password" name="password" onChange={handleChange} placeholder="Password"/>
            <Buttons>
                <Button type="button" onClick={handleSubmitLogin}>Login</Button>
                <p> or </p>
                <Button type="button" onClick={handleSubmitRegister}>Register</Button>
            </Buttons>
        </Form>
    )
}

export default Login