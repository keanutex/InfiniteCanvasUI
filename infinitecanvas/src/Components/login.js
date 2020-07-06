import axios from 'axios';
import React, { useState } from 'react';
import { Form, Input, Button, Buttons } from './Styled-Components/styled-components';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
 //enter config
};

firebase.initializeApp(firebaseConfig);

//make auth and firestore references
const auth = firebase.auth();

function Login(props) {
    const [formData, setFormData] = useState({});
    const [showErr, setshowErr] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmitRegister = async (e) => {
        auth.createUserWithEmailAndPassword(formData.email, formData.password).then(() => {
            handleRegisterData();
            console.log("user has registered in successfully");

        }).catch(error => {
            console.log(error);
            setshowErr(true);
        });
    }
    const handleSubmitLogin = async (e) => {
        auth.signInWithEmailAndPassword(formData.email, formData.password).then(() => {
            handleLoginData();
            console.log("user has registered in successfully");

        }).catch(error => {
            setshowErr(true);
            console.log(error);
        });
    }



    const handleLoginData = async () => {
        // here is where you would login the user
        await axios.post('http://127.0.0.1:3000/account/signin',
            {
                username: formData.username,
                email: formData.email
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }
        ).then(response => {
            props.setUser(formData.username);
            props.setUserData({ userId: response.data.userId, typeId: response.data.typeId, statusId: response.data.statusId })
        }).catch(error => {
            console.log(error)
        });
    };

    const handleRegisterData = async () => {
        await axios.post('http://127.0.0.1:3000/account/register',
            {
                username: formData.username,
                email: formData.email
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(response => {
                props.setUser(formData.username);
                props.setUserData({ userId: response.data.userId, typeId: response.data.typeId, statusId: response.data.statusId })
            }).catch(error => {
                console.log(error);

            });

    };

    return (

        <Form>
            <Input type="text" name="username" onChange={handleChange} placeholder="Username" />
            <Input type="password" name="password" onChange={handleChange} placeholder="Password" />
            <Input type="email" name="email" onChange={handleChange} placeholder="Email" />
            {showErr && <p>Could Not Log You in, Ensure Email, Username and Password is Correct</p>}
            <Buttons>
                <Button type="button" onClick={handleSubmitLogin}>Login</Button>
                <p> or </p>
                <Button type="button" onClick={handleSubmitRegister}>Register</Button>
            </Buttons>
        </Form>
    )
}

export default Login