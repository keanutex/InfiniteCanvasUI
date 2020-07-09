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
    const [registerErr, setregisterErr] = useState(false);
    const [userTaken, setuserTaken] = useState(false);
    const [internalErr, setinternalErr] = useState(false);
    const [LoginErr, setLoginErr] = useState(false);
    const handleChange = (e) => {
        setLoginErr(false);
        setregisterErr(false);
        setuserTaken(false);
        setinternalErr(false);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const collectUsernames = async () => {
        setuserTaken(false);
        setLoginErr(false);
        await axios.post('http://51.132.134.222:3000/account/users',
            {
                username: formData.username
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }
        ).then(response => {
            if(response.status === 200){
                handleSubmitRegister();
            }
            else if(response.status === 204){
                setuserTaken(true);
            }
            else{
                console.log("user is taken");
                setinternalErr(true);
            }
        }).catch(error => {
            setinternalErr(true);
            console.log(error)
        });

    }


    const handleSubmitRegister = async () => {
        auth.createUserWithEmailAndPassword(formData.email, formData.password).then(() => {
            handleRegisterData();
            console.log("user has registered in successfully");

        }).catch(error => {
            console.log(error);
            setregisterErr(true);
        });
    }
    const handleSubmitLogin = async (e) => {
        setuserTaken(false);
        setLoginErr(false);
        auth.signInWithEmailAndPassword(formData.email, formData.password).then(() => {
            handleLoginData();
            console.log("user has registered in successfully");

        }).catch(error => {
            setLoginErr(true);
            console.log(error);
        });
    }



    const handleLoginData = async () => {
        // here is where you would login the user
        await axios.post('http://51.132.134.222:3000/account/signin',
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
            setLoginErr(true);
            console.log(error)
        });
    };

    const handleRegisterData = async () => {
        await axios.post('http://51.132.134.222:3000/account/register',
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
            {userTaken && <p style={{textAlign: 'center', color:'red'}}>Username is taken, please enter a different one</p> }
            {LoginErr && <p style={{textAlign: 'center', color:'red'}}>Incorrect Username/Password</p>}
            {registerErr && <p style={{textAlign: 'center', color:'red'}}>Could Not Log You in, Ensure Email, Username and Password is Correct</p>}
            {internalErr && <p style={{textAlign: 'center', color:'red'}}>Something went wrong, please try again later</p>}
            <Buttons>
                <Button type="button" onClick={handleSubmitLogin}>Login</Button>
                <p> or </p>
                <Button type="button" onClick={collectUsernames}>Register</Button>
            </Buttons>
        </Form>
    )
}

export default Login