import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button } from './Styled-Components/styled-components';
import { setUserSession } from './authService.js';

class Authentication extends React.Component {
    emailChanged = (event) => {
        this.setState({ email: event.target.value })
    }
    usernameChanged = (event) => {
        this.setState({ username: event.target.value })
    }
    passwordChanged = (event) => {
        this.setState({ password: event.target.value })
    }

    handleSubmitLogin = async (e) => {
        console.log(this.state.password, this.state.username);
        e.preventDefault();
       await axios.post('http://127.0.0.1:3000/users/signin',
            { 
                username: this.state.username, 
                password: this.state.password 
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                this.setState({ authLevel: 1 });
            }
            else {
                this.setState({ authLevel: 0 }).catch(error => {
                });
            };
        });
    }
    handleSubmitRegister = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:3000/users/register',
            {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(response => {
                console.log(response);
                setUserSession(response.data.token, response.data.user);
                console.log(response);
                this.setState({ authLevel: 2 })
            }).catch(error => {
            });
    };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            authLevel: 0
        }
    }
    render() {
        if (this.state.authLevel == 0)
            return <div>
                {
                    <Form>
                        <Input type="text" onChange={this.usernameChanged} placeholder="Username" required />
                        <Input type="password" onChange={this.passwordChanged} placeholder="Password" required />
                        <Button type="button" onClick={this.handleSubmitLogin}>Login</Button>

                        <Input type="text" onChange={this.usernameChanged} placeholder="Username" required />
                        <Input type="email" onChange={this.emailChanged} placeholder="Email" required />
                        <Input type="password" onChange={this.passwordChanged} placeholder="Password" required />
                        <Button type="button" onClick={this.handleSubmitRegister}>Register</Button>
                    </Form>
                }

            </div>
        else if (this.state.authLevel == 1)
        //must handle where to redirect action
            return <div>
                {

                    <Form>
                        <h1 type="text" style={{textAlign: 'center'}}> <div>Welcome back</div>{this.state.username}</h1>
                        <Button type="button" onClick={this.handleSubmitLogin}>Continue</Button>
                    </Form>
                }

            </div>
        else if (this.state.authLevel == 2)
        //must handle where to redirect action
            return <div>
                {
                    <Form>
                        <h1 type="text" style={{textAlign: 'center'}}> Great to have you join us, {this.state.username}</h1>
                        <Button type="button" onClick={this.handleSubmitLogin}>Continue</Button>
                    </Form>
                }

            </div>
    }

}
export default Authentication